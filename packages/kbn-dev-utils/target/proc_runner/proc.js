'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProc = createProc;

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

var _fs = require('fs');

var _rxjs = require('rxjs');

var Rx = _interopRequireWildcard(_rxjs);

var _operators = require('rxjs/operators');

var _chalk = require('chalk');

var _treeKill = require('tree-kill');

var _treeKill2 = _interopRequireDefault(_treeKill);

var _util = require('util');

var _observe_lines = require('./observe_lines');

var _errors = require('./errors');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const treeKillAsync = (0, _util.promisify)(_treeKill2.default); /*
                                                                 * Licensed to Elasticsearch B.V. under one or more contributor
                                                                 * license agreements. See the NOTICE file distributed with
                                                                 * this work for additional information regarding copyright
                                                                 * ownership. Elasticsearch B.V. licenses this file to you under
                                                                 * the Apache License, Version 2.0 (the "License"); you may
                                                                 * not use this file except in compliance with the License.
                                                                 * You may obtain a copy of the License at
                                                                 *
                                                                 *    http://www.apache.org/licenses/LICENSE-2.0
                                                                 *
                                                                 * Unless required by applicable law or agreed to in writing,
                                                                 * software distributed under the License is distributed on an
                                                                 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                                                                 * KIND, either express or implied.  See the License for the
                                                                 * specific language governing permissions and limitations
                                                                 * under the License.
                                                                 */

const SECOND = 1000;
const STOP_TIMEOUT = 30 * SECOND;

async function withTimeout(attempt, ms, onTimeout) {
  const TIMEOUT = Symbol('timeout');
  try {
    await Promise.race([attempt(), new Promise((resolve, reject) => setTimeout(() => reject(TIMEOUT), STOP_TIMEOUT))]);
  } catch (error) {
    if (error === TIMEOUT) {
      await onTimeout();
    } else {
      throw error;
    }
  }
}

function createProc(name, { cmd, args, cwd, env, stdin, log }) {
  log.info('[%s] > %s', name, cmd, args.join(' '));

  // spawn fails with ENOENT when either the
  // cmd or cwd don't exist, so we check for the cwd
  // ahead of time so that the error is less ambiguous
  try {
    if (!(0, _fs.statSync)(cwd).isDirectory()) {
      throw new Error(`cwd "${cwd}" exists but is not a directory`);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`cwd "${cwd}" does not exist`);
    }
  }

  const childProcess = (0, _execa2.default)(cmd, args, {
    cwd,
    env,
    stdio: ['pipe', 'pipe', 'pipe']
  });

  if (stdin) {
    childProcess.stdin.end(stdin, 'utf8');
  } else {
    childProcess.stdin.end();
  }

  return new class Proc {
    constructor() {
      this.name = name;
      this.lines$ = Rx.merge((0, _observe_lines.observeLines)(childProcess.stdout), (0, _observe_lines.observeLines)(childProcess.stderr)).pipe((0, _operators.tap)(line => log.write(` ${(0, _chalk.gray)('proc')} [${(0, _chalk.gray)(name)}] ${line}`)), (0, _operators.share)());
      this.outcome$ = Rx.defer(() => {
        // observe first exit event
        const exit$ = Rx.fromEvent(childProcess, 'exit').pipe((0, _operators.take)(1), (0, _operators.map)(([code]) => {
          if (this._stopCalled) {
            return null;
          }
          // JVM exits with 143 on SIGTERM and 130 on SIGINT, dont' treat then as errors
          if (code > 0 && !(code === 143 || code === 130)) {
            throw (0, _errors.createCliError)(`[${name}] exited with code ${code}`);
          }

          return code;
        }));

        // observe first error event until there is a close event
        const error$ = Rx.fromEvent(childProcess, 'error').pipe((0, _operators.take)(1), (0, _operators.mergeMap)(err => Rx.throwError(err)));

        return Rx.race(exit$, error$);
      }).pipe((0, _operators.share)());
      this._outcomePromise = Rx.merge(this.lines$.pipe((0, _operators.ignoreElements)()), this.outcome$).toPromise();
      this._stopCalled = false;
    }

    getOutcomePromise() {
      return this._outcomePromise;
    }

    async stop(signal) {
      if (this._stopCalled) {
        return;
      }
      this._stopCalled = true;
      await withTimeout(async () => {
        log.debug(`Sending "${signal}" to proc "${name}"`);
        await treeKillAsync(childProcess.pid, signal);
        await this.getOutcomePromise();
      }, STOP_TIMEOUT, async () => {
        log.warning(`Proc "${name}" was sent "${signal}" and didn't emit the "exit" or "error" events after ${STOP_TIMEOUT} ms, sending SIGKILL`);
        await treeKillAsync(childProcess.pid, 'SIGKILL');
      });

      await withTimeout(async () => {
        try {
          await this.getOutcomePromise();
        } catch (error) {
          // ignore
        }
      }, STOP_TIMEOUT, async () => {
        throw new Error(`Proc "${name}" was stopped but never emitted either the "exit" or "error" event after ${STOP_TIMEOUT} ms`);
      });
    }
  }();
}
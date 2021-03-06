"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runKibanaServer = runKibanaServer;

var _path = require("path");

var _paths = require("./paths");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

async function runKibanaServer({
  procs,
  config,
  options
}) {
  const {
    installDir
  } = options;
  await procs.run('kibana', {
    cmd: getKibanaCmd(installDir),
    args: filterCliArgs(collectCliArgs(config, options)),
    env: _objectSpread({
      FORCE_COLOR: 1
    }, process.env),
    cwd: installDir || _paths.KIBANA_ROOT,
    wait: /Server running/
  });
}

function getKibanaCmd(installDir) {
  if (installDir) {
    return process.platform.startsWith('win') ? (0, _path.resolve)(installDir, 'bin/kibana.bat') : (0, _path.resolve)(installDir, 'bin/kibana');
  }

  return _paths.KIBANA_EXEC;
}
/**
 * When installDir is passed, we run from a built version of Kibana,
 * which uses different command line arguments. If installDir is not
 * passed, we run from source code. We also allow passing in extra
 * Kibana server options, so we tack those on here.
 */


function collectCliArgs(config, {
  installDir,
  extraKbnOpts
}) {
  const buildArgs = config.get('kbnTestServer.buildArgs') || [];
  const sourceArgs = config.get('kbnTestServer.sourceArgs') || [];
  const serverArgs = config.get('kbnTestServer.serverArgs') || [];
  return pipe(serverArgs, args => installDir ? args.filter(a => a !== '--oss') : args, args => installDir ? [...buildArgs, ...args] : [_paths.KIBANA_EXEC_PATH, ...sourceArgs, ...args], args => args.concat(extraKbnOpts || []));
}
/**
 * Filter the cli args to remove duplications and
 * overridden options
 */


function filterCliArgs(args) {
  return args.reduce((acc, val, ind) => {
    // If original argv has a later basepath setting, skip this val.
    if (isBasePathSettingOverridden(args, val, ind)) {
      return acc;
    } // Check if original argv has a later setting that overrides
    // the current val. If so, skip this val.


    if (!allowsDuplicate(val) && findIndexFrom(args, ++ind, opt => opt.split('=')[0] === val.split('=')[0]) > -1) {
      return acc;
    }

    return [...acc, val];
  }, []);
}
/**
 * Apply each function in fns to the result of the
 * previous function. The first function's input
 * is the arr array.
 */


function pipe(arr, ...fns) {
  return fns.reduce((acc, fn) => {
    return fn(acc);
  }, arr);
}
/**
 * Checks whether a specific parameter is allowed to appear multiple
 * times in the Kibana parameters.
 */


function allowsDuplicate(val) {
  return ['--plugin-path'].includes(val.split('=')[0]);
}

function isBasePathSettingOverridden(args, val, ind) {
  const key = val.split('=')[0];
  const basePathKeys = ['--no-base-path', '--server.basePath'];

  if (basePathKeys.includes(key)) {
    if (findIndexFrom(args, ++ind, opt => basePathKeys.includes(opt.split('=')[0])) > -1) {
      return true;
    }
  }

  return false;
}

function findIndexFrom(array, index, ...args) {
  return [...array].slice(index).findIndex(...args);
}
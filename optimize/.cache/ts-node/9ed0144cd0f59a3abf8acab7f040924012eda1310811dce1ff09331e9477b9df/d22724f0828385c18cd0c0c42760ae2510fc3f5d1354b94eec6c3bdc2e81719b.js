"use strict";
/*
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
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const plugin_1 = require("../plugin");
const plugin_context_1 = require("../plugin_context");
const plugin_discovery_error_1 = require("./plugin_discovery_error");
const plugin_manifest_parser_1 = require("./plugin_manifest_parser");
const fsReadDir$ = rxjs_1.bindNodeCallback(fs_1.readdir);
const fsStat$ = rxjs_1.bindNodeCallback(fs_1.stat);
/**
 * Tries to discover all possible plugins based on the provided plugin config.
 * Discovery result consists of two separate streams, the one (`plugin$`) is
 * for the successfully discovered plugins and the other one (`error$`) is for
 * all the errors that occurred during discovery process.
 *
 * @param config Plugin config instance.
 * @param coreContext Kibana core values.
 * @internal
 */
function discover(config, coreContext) {
    const log = coreContext.logger.get('plugins-discovery');
    log.debug('Discovering plugins...');
    const discoveryResults$ = processPluginSearchPaths$(config.pluginSearchPaths, log).pipe(operators_1.mergeMap(pluginPathOrError => {
        return typeof pluginPathOrError === 'string'
            ? createPlugin$(pluginPathOrError, log, coreContext)
            : [pluginPathOrError];
    }), operators_1.shareReplay());
    return {
        plugin$: discoveryResults$.pipe(operators_1.filter((entry) => entry instanceof plugin_1.Plugin)),
        error$: discoveryResults$.pipe(operators_1.filter((entry) => !(entry instanceof plugin_1.Plugin))),
    };
}
exports.discover = discover;
/**
 * Iterates over every plugin search path and returns a merged stream of all
 * sub-directories. If directory cannot be read or it's impossible to get stat
 * for any of the nested entries then error is added into the stream instead.
 * @param pluginDirs List of the top-level directories to process.
 * @param log Plugin discovery logger instance.
 */
function processPluginSearchPaths$(pluginDirs, log) {
    return rxjs_1.from(pluginDirs).pipe(operators_1.mergeMap(dir => {
        log.debug(`Scanning "${dir}" for plugin sub-directories...`);
        return fsReadDir$(dir).pipe(operators_1.mergeMap((subDirs) => subDirs.map(subDir => path_1.resolve(dir, subDir))), operators_1.mergeMap(path => fsStat$(path).pipe(
        // Filter out non-directory entries from target directories, it's expected that
        // these directories may contain files (e.g. `README.md` or `package.json`).
        // We shouldn't silently ignore the entries we couldn't get stat for though.
        operators_1.mergeMap(pathStat => (pathStat.isDirectory() ? [path] : [])), operators_1.catchError(err => [plugin_discovery_error_1.PluginDiscoveryError.invalidPluginPath(path, err)]))), operators_1.catchError(err => [plugin_discovery_error_1.PluginDiscoveryError.invalidSearchPath(dir, err)]));
    }));
}
/**
 * Tries to load and parse the plugin manifest file located at the provided plugin
 * directory path and produces an error result if it fails to do so or plugin manifest
 * isn't valid.
 * @param path Path to the plugin directory where manifest should be loaded from.
 * @param log Plugin discovery logger instance.
 * @param coreContext Kibana core context.
 */
function createPlugin$(path, log, coreContext) {
    return rxjs_1.from(plugin_manifest_parser_1.parseManifest(path, coreContext.env.packageInfo)).pipe(operators_1.map(manifest => {
        log.debug(`Successfully discovered plugin "${manifest.id}" at "${path}"`);
        return new plugin_1.Plugin(path, manifest, plugin_context_1.createPluginInitializerContext(coreContext, manifest));
    }), operators_1.catchError(err => [err]));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEvc3JjL2NvcmUvc2VydmVyL3BsdWdpbnMvZGlzY292ZXJ5L3BsdWdpbnNfZGlzY292ZXJ5LnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS9zcmMvY29yZS9zZXJ2ZXIvcGx1Z2lucy9kaXNjb3ZlcnkvcGx1Z2luc19kaXNjb3ZlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRzs7QUFFSCwyQkFBbUM7QUFDbkMsK0JBQStCO0FBQy9CLCtCQUE4QztBQUM5Qyw4Q0FBZ0Y7QUFHaEYsc0NBQW1DO0FBQ25DLHNEQUFtRTtBQUVuRSxxRUFBZ0U7QUFDaEUscUVBQXlEO0FBRXpELE1BQU0sVUFBVSxHQUFHLHVCQUFnQixDQUFDLFlBQU8sQ0FBQyxDQUFDO0FBQzdDLE1BQU0sT0FBTyxHQUFHLHVCQUFnQixDQUFDLFNBQUksQ0FBQyxDQUFDO0FBRXZDOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxNQUFxQixFQUFFLFdBQXdCO0lBQ3RFLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDeEQsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRXBDLE1BQU0saUJBQWlCLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckYsb0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sT0FBTyxpQkFBaUIsS0FBSyxRQUFRO1lBQzFDLENBQUMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUNGLHVCQUFXLEVBQUUsQ0FDZCxDQUFDO0lBRUYsT0FBTztRQUNMLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQU0sQ0FBQyxDQUFDLEtBQUssRUFBbUIsRUFBRSxDQUFDLEtBQUssWUFBWSxlQUFNLENBQUMsQ0FBQztRQUM1RixNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUM1QixrQkFBTSxDQUFDLENBQUMsS0FBSyxFQUFpQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxlQUFNLENBQUMsQ0FBQyxDQUM3RTtLQUNGLENBQUM7QUFDSixDQUFDO0FBbkJELDRCQW1CQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMseUJBQXlCLENBQUMsVUFBaUMsRUFBRSxHQUFXO0lBQy9FLE9BQU8sV0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDMUIsb0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLGlDQUFpQyxDQUFDLENBQUM7UUFFN0QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUN6QixvQkFBUSxDQUFDLENBQUMsT0FBaUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUM1RSxvQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7UUFDaEIsK0VBQStFO1FBQy9FLDRFQUE0RTtRQUM1RSw0RUFBNEU7UUFDNUUsb0JBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM1RCxzQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyw2Q0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUN2RSxDQUNGLEVBQ0Qsc0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsNkNBQW9CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILFNBQVMsYUFBYSxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsV0FBd0I7SUFDeEUsT0FBTyxXQUFJLENBQUMsc0NBQWEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDaEUsZUFBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSwrQ0FBOEIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDLENBQUMsRUFDRixzQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUN6QixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byBFbGFzdGljc2VhcmNoIEIuVi4gdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3JcbiAqIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoXG4gKiB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodFxuICogb3duZXJzaGlwLiBFbGFzdGljc2VhcmNoIEIuVi4gbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlclxuICogdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heVxuICogbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyByZWFkZGlyLCBzdGF0IH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgYmluZE5vZGVDYWxsYmFjaywgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAsIG1lcmdlTWFwLCBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vbG9nZ2luZyc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW4nO1xuaW1wb3J0IHsgY3JlYXRlUGx1Z2luSW5pdGlhbGl6ZXJDb250ZXh0IH0gZnJvbSAnLi4vcGx1Z2luX2NvbnRleHQnO1xuaW1wb3J0IHsgUGx1Z2luc0NvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnNfY29uZmlnJztcbmltcG9ydCB7IFBsdWdpbkRpc2NvdmVyeUVycm9yIH0gZnJvbSAnLi9wbHVnaW5fZGlzY292ZXJ5X2Vycm9yJztcbmltcG9ydCB7IHBhcnNlTWFuaWZlc3QgfSBmcm9tICcuL3BsdWdpbl9tYW5pZmVzdF9wYXJzZXInO1xuXG5jb25zdCBmc1JlYWREaXIkID0gYmluZE5vZGVDYWxsYmFjayhyZWFkZGlyKTtcbmNvbnN0IGZzU3RhdCQgPSBiaW5kTm9kZUNhbGxiYWNrKHN0YXQpO1xuXG4vKipcbiAqIFRyaWVzIHRvIGRpc2NvdmVyIGFsbCBwb3NzaWJsZSBwbHVnaW5zIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBwbHVnaW4gY29uZmlnLlxuICogRGlzY292ZXJ5IHJlc3VsdCBjb25zaXN0cyBvZiB0d28gc2VwYXJhdGUgc3RyZWFtcywgdGhlIG9uZSAoYHBsdWdpbiRgKSBpc1xuICogZm9yIHRoZSBzdWNjZXNzZnVsbHkgZGlzY292ZXJlZCBwbHVnaW5zIGFuZCB0aGUgb3RoZXIgb25lIChgZXJyb3IkYCkgaXMgZm9yXG4gKiBhbGwgdGhlIGVycm9ycyB0aGF0IG9jY3VycmVkIGR1cmluZyBkaXNjb3ZlcnkgcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIFBsdWdpbiBjb25maWcgaW5zdGFuY2UuXG4gKiBAcGFyYW0gY29yZUNvbnRleHQgS2liYW5hIGNvcmUgdmFsdWVzLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3Zlcihjb25maWc6IFBsdWdpbnNDb25maWcsIGNvcmVDb250ZXh0OiBDb3JlQ29udGV4dCkge1xuICBjb25zdCBsb2cgPSBjb3JlQ29udGV4dC5sb2dnZXIuZ2V0KCdwbHVnaW5zLWRpc2NvdmVyeScpO1xuICBsb2cuZGVidWcoJ0Rpc2NvdmVyaW5nIHBsdWdpbnMuLi4nKTtcblxuICBjb25zdCBkaXNjb3ZlcnlSZXN1bHRzJCA9IHByb2Nlc3NQbHVnaW5TZWFyY2hQYXRocyQoY29uZmlnLnBsdWdpblNlYXJjaFBhdGhzLCBsb2cpLnBpcGUoXG4gICAgbWVyZ2VNYXAocGx1Z2luUGF0aE9yRXJyb3IgPT4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiBwbHVnaW5QYXRoT3JFcnJvciA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjcmVhdGVQbHVnaW4kKHBsdWdpblBhdGhPckVycm9yLCBsb2csIGNvcmVDb250ZXh0KVxuICAgICAgICA6IFtwbHVnaW5QYXRoT3JFcnJvcl07XG4gICAgfSksXG4gICAgc2hhcmVSZXBsYXkoKVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcGx1Z2luJDogZGlzY292ZXJ5UmVzdWx0cyQucGlwZShmaWx0ZXIoKGVudHJ5KTogZW50cnkgaXMgUGx1Z2luID0+IGVudHJ5IGluc3RhbmNlb2YgUGx1Z2luKSksXG4gICAgZXJyb3IkOiBkaXNjb3ZlcnlSZXN1bHRzJC5waXBlKFxuICAgICAgZmlsdGVyKChlbnRyeSk6IGVudHJ5IGlzIFBsdWdpbkRpc2NvdmVyeUVycm9yID0+ICEoZW50cnkgaW5zdGFuY2VvZiBQbHVnaW4pKVxuICAgICksXG4gIH07XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBldmVyeSBwbHVnaW4gc2VhcmNoIHBhdGggYW5kIHJldHVybnMgYSBtZXJnZWQgc3RyZWFtIG9mIGFsbFxuICogc3ViLWRpcmVjdG9yaWVzLiBJZiBkaXJlY3RvcnkgY2Fubm90IGJlIHJlYWQgb3IgaXQncyBpbXBvc3NpYmxlIHRvIGdldCBzdGF0XG4gKiBmb3IgYW55IG9mIHRoZSBuZXN0ZWQgZW50cmllcyB0aGVuIGVycm9yIGlzIGFkZGVkIGludG8gdGhlIHN0cmVhbSBpbnN0ZWFkLlxuICogQHBhcmFtIHBsdWdpbkRpcnMgTGlzdCBvZiB0aGUgdG9wLWxldmVsIGRpcmVjdG9yaWVzIHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0gbG9nIFBsdWdpbiBkaXNjb3ZlcnkgbG9nZ2VyIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBwcm9jZXNzUGx1Z2luU2VhcmNoUGF0aHMkKHBsdWdpbkRpcnM6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiwgbG9nOiBMb2dnZXIpIHtcbiAgcmV0dXJuIGZyb20ocGx1Z2luRGlycykucGlwZShcbiAgICBtZXJnZU1hcChkaXIgPT4ge1xuICAgICAgbG9nLmRlYnVnKGBTY2FubmluZyBcIiR7ZGlyfVwiIGZvciBwbHVnaW4gc3ViLWRpcmVjdG9yaWVzLi4uYCk7XG5cbiAgICAgIHJldHVybiBmc1JlYWREaXIkKGRpcikucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKHN1YkRpcnM6IHN0cmluZ1tdKSA9PiBzdWJEaXJzLm1hcChzdWJEaXIgPT4gcmVzb2x2ZShkaXIsIHN1YkRpcikpKSxcbiAgICAgICAgbWVyZ2VNYXAocGF0aCA9PlxuICAgICAgICAgIGZzU3RhdCQocGF0aCkucGlwZShcbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgbm9uLWRpcmVjdG9yeSBlbnRyaWVzIGZyb20gdGFyZ2V0IGRpcmVjdG9yaWVzLCBpdCdzIGV4cGVjdGVkIHRoYXRcbiAgICAgICAgICAgIC8vIHRoZXNlIGRpcmVjdG9yaWVzIG1heSBjb250YWluIGZpbGVzIChlLmcuIGBSRUFETUUubWRgIG9yIGBwYWNrYWdlLmpzb25gKS5cbiAgICAgICAgICAgIC8vIFdlIHNob3VsZG4ndCBzaWxlbnRseSBpZ25vcmUgdGhlIGVudHJpZXMgd2UgY291bGRuJ3QgZ2V0IHN0YXQgZm9yIHRob3VnaC5cbiAgICAgICAgICAgIG1lcmdlTWFwKHBhdGhTdGF0ID0+IChwYXRoU3RhdC5pc0RpcmVjdG9yeSgpID8gW3BhdGhdIDogW10pKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IFtQbHVnaW5EaXNjb3ZlcnlFcnJvci5pbnZhbGlkUGx1Z2luUGF0aChwYXRoLCBlcnIpXSlcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IFtQbHVnaW5EaXNjb3ZlcnlFcnJvci5pbnZhbGlkU2VhcmNoUGF0aChkaXIsIGVycildKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xufVxuXG4vKipcbiAqIFRyaWVzIHRvIGxvYWQgYW5kIHBhcnNlIHRoZSBwbHVnaW4gbWFuaWZlc3QgZmlsZSBsb2NhdGVkIGF0IHRoZSBwcm92aWRlZCBwbHVnaW5cbiAqIGRpcmVjdG9yeSBwYXRoIGFuZCBwcm9kdWNlcyBhbiBlcnJvciByZXN1bHQgaWYgaXQgZmFpbHMgdG8gZG8gc28gb3IgcGx1Z2luIG1hbmlmZXN0XG4gKiBpc24ndCB2YWxpZC5cbiAqIEBwYXJhbSBwYXRoIFBhdGggdG8gdGhlIHBsdWdpbiBkaXJlY3Rvcnkgd2hlcmUgbWFuaWZlc3Qgc2hvdWxkIGJlIGxvYWRlZCBmcm9tLlxuICogQHBhcmFtIGxvZyBQbHVnaW4gZGlzY292ZXJ5IGxvZ2dlciBpbnN0YW5jZS5cbiAqIEBwYXJhbSBjb3JlQ29udGV4dCBLaWJhbmEgY29yZSBjb250ZXh0LlxuICovXG5mdW5jdGlvbiBjcmVhdGVQbHVnaW4kKHBhdGg6IHN0cmluZywgbG9nOiBMb2dnZXIsIGNvcmVDb250ZXh0OiBDb3JlQ29udGV4dCkge1xuICByZXR1cm4gZnJvbShwYXJzZU1hbmlmZXN0KHBhdGgsIGNvcmVDb250ZXh0LmVudi5wYWNrYWdlSW5mbykpLnBpcGUoXG4gICAgbWFwKG1hbmlmZXN0ID0+IHtcbiAgICAgIGxvZy5kZWJ1ZyhgU3VjY2Vzc2Z1bGx5IGRpc2NvdmVyZWQgcGx1Z2luIFwiJHttYW5pZmVzdC5pZH1cIiBhdCBcIiR7cGF0aH1cImApO1xuICAgICAgcmV0dXJuIG5ldyBQbHVnaW4ocGF0aCwgbWFuaWZlc3QsIGNyZWF0ZVBsdWdpbkluaXRpYWxpemVyQ29udGV4dChjb3JlQ29udGV4dCwgbWFuaWZlc3QpKTtcbiAgICB9KSxcbiAgICBjYXRjaEVycm9yKGVyciA9PiBbZXJyXSlcbiAgKTtcbn1cbiJdfQ==
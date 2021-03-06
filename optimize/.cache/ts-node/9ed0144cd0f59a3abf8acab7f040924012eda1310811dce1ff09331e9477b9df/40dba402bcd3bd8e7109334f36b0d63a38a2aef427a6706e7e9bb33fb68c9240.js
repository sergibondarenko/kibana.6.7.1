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
const path_1 = require("path");
const constants_1 = require("../constants");
const projects_1 = require("./projects");
/**
 * Finds the `tsconfig.json` Project object for a specific path by looking through
 * Project instances defined in `src/dev/typescript/projects.ts`. If there isn't exactly one project
 * that includes the path an error is thrown with, hopefully, a helpful error
 * message that aims to help developers know how to fix the situation and ensure
 * that each TypeScript file maps to only a single `tsconfig.json` file.
 *
 * @param path Absolute path to a .ts file
 */
function getTsProjectForAbsolutePath(path) {
    const relPath = path_1.relative(constants_1.REPO_ROOT, path);
    const projects = projects_1.PROJECTS.filter(p => p.isAbsolutePathSelected(path));
    if (!projects.length) {
        throw new Error(`Unable to find tsconfig.json file selecting "${relPath}". Ensure one exists and it is listed in "src/dev/typescript/projects.ts"`);
    }
    if (projects.length !== 1) {
        const configPaths = projects.map(p => `"${path_1.relative(constants_1.REPO_ROOT, p.tsConfigPath)}"`);
        const pathsMsg = `${configPaths.slice(0, -1).join(', ')} or ${configPaths[configPaths.length - 1]}`;
        throw new Error(`"${relPath}" is selected by multiple tsconfig.json files. This probably means the includes/excludes in ${pathsMsg} are too broad and include the code from multiple projects.`);
    }
    return projects[0];
}
exports.getTsProjectForAbsolutePath = getTsProjectForAbsolutePath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEvc3JjL2Rldi90eXBlc2NyaXB0L2dldF90c19wcm9qZWN0X2Zvcl9hYnNvbHV0ZV9wYXRoLnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS9zcmMvZGV2L3R5cGVzY3JpcHQvZ2V0X3RzX3Byb2plY3RfZm9yX2Fic29sdXRlX3BhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRzs7QUFFSCwrQkFBZ0M7QUFFaEMsNENBQXlDO0FBQ3pDLHlDQUFzQztBQUV0Qzs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLDJCQUEyQixDQUFDLElBQVk7SUFDdEQsTUFBTSxPQUFPLEdBQUcsZUFBUSxDQUFDLHFCQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV0RSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNwQixNQUFNLElBQUksS0FBSyxDQUNiLGdEQUFnRCxPQUFPLDJFQUEyRSxDQUNuSSxDQUFDO0tBQ0g7SUFFRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGVBQVEsQ0FBQyxxQkFBUyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEYsTUFBTSxRQUFRLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FDckQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUNwQyxFQUFFLENBQUM7UUFFSCxNQUFNLElBQUksS0FBSyxDQUNiLElBQUksT0FBTywrRkFBK0YsUUFBUSw2REFBNkQsQ0FDaEwsQ0FBQztLQUNIO0lBRUQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQXZCRCxrRUF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gRWxhc3RpY3NlYXJjaCBCLlYuIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yXG4gKiBsaWNlbnNlIGFncmVlbWVudHMuIFNlZSB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aFxuICogdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHRcbiAqIG93bmVyc2hpcC4gRWxhc3RpY3NlYXJjaCBCLlYuIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXJcbiAqIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXlcbiAqIG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgUkVQT19ST09UIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFBST0pFQ1RTIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbi8qKlxuICogRmluZHMgdGhlIGB0c2NvbmZpZy5qc29uYCBQcm9qZWN0IG9iamVjdCBmb3IgYSBzcGVjaWZpYyBwYXRoIGJ5IGxvb2tpbmcgdGhyb3VnaFxuICogUHJvamVjdCBpbnN0YW5jZXMgZGVmaW5lZCBpbiBgc3JjL2Rldi90eXBlc2NyaXB0L3Byb2plY3RzLnRzYC4gSWYgdGhlcmUgaXNuJ3QgZXhhY3RseSBvbmUgcHJvamVjdFxuICogdGhhdCBpbmNsdWRlcyB0aGUgcGF0aCBhbiBlcnJvciBpcyB0aHJvd24gd2l0aCwgaG9wZWZ1bGx5LCBhIGhlbHBmdWwgZXJyb3JcbiAqIG1lc3NhZ2UgdGhhdCBhaW1zIHRvIGhlbHAgZGV2ZWxvcGVycyBrbm93IGhvdyB0byBmaXggdGhlIHNpdHVhdGlvbiBhbmQgZW5zdXJlXG4gKiB0aGF0IGVhY2ggVHlwZVNjcmlwdCBmaWxlIG1hcHMgdG8gb25seSBhIHNpbmdsZSBgdHNjb25maWcuanNvbmAgZmlsZS5cbiAqXG4gKiBAcGFyYW0gcGF0aCBBYnNvbHV0ZSBwYXRoIHRvIGEgLnRzIGZpbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRzUHJvamVjdEZvckFic29sdXRlUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVsUGF0aCA9IHJlbGF0aXZlKFJFUE9fUk9PVCwgcGF0aCk7XG4gIGNvbnN0IHByb2plY3RzID0gUFJPSkVDVFMuZmlsdGVyKHAgPT4gcC5pc0Fic29sdXRlUGF0aFNlbGVjdGVkKHBhdGgpKTtcblxuICBpZiAoIXByb2plY3RzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBVbmFibGUgdG8gZmluZCB0c2NvbmZpZy5qc29uIGZpbGUgc2VsZWN0aW5nIFwiJHtyZWxQYXRofVwiLiBFbnN1cmUgb25lIGV4aXN0cyBhbmQgaXQgaXMgbGlzdGVkIGluIFwic3JjL2Rldi90eXBlc2NyaXB0L3Byb2plY3RzLnRzXCJgXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggIT09IDEpIHtcbiAgICBjb25zdCBjb25maWdQYXRocyA9IHByb2plY3RzLm1hcChwID0+IGBcIiR7cmVsYXRpdmUoUkVQT19ST09ULCBwLnRzQ29uZmlnUGF0aCl9XCJgKTtcblxuICAgIGNvbnN0IHBhdGhzTXNnID0gYCR7Y29uZmlnUGF0aHMuc2xpY2UoMCwgLTEpLmpvaW4oJywgJyl9IG9yICR7XG4gICAgICBjb25maWdQYXRoc1tjb25maWdQYXRocy5sZW5ndGggLSAxXVxuICAgIH1gO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFwiJHtyZWxQYXRofVwiIGlzIHNlbGVjdGVkIGJ5IG11bHRpcGxlIHRzY29uZmlnLmpzb24gZmlsZXMuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhlIGluY2x1ZGVzL2V4Y2x1ZGVzIGluICR7cGF0aHNNc2d9IGFyZSB0b28gYnJvYWQgYW5kIGluY2x1ZGUgdGhlIGNvZGUgZnJvbSBtdWx0aXBsZSBwcm9qZWN0cy5gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0c1swXTtcbn1cbiJdfQ==
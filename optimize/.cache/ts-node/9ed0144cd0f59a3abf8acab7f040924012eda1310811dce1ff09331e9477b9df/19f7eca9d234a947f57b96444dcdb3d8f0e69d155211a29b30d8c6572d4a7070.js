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
const plugins_service_1 = require("./plugins_service");
/** @internal */
var discovery_1 = require("./discovery");
exports.isNewPlatformPlugin = discovery_1.isNewPlatformPlugin;
var plugin_context_1 = require("./plugin_context");
exports.PluginInitializerContext = plugin_context_1.PluginInitializerContext;
exports.PluginStartContext = plugin_context_1.PluginStartContext;
var plugin_1 = require("./plugin");
exports.PluginName = plugin_1.PluginName;
/** @internal */
class PluginsModule {
    constructor(coreContext) {
        this.service = new plugins_service_1.PluginsService(coreContext);
    }
}
exports.PluginsModule = PluginsModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEvc3JjL2NvcmUvc2VydmVyL3BsdWdpbnMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FudGhvbnkvZ2l0X3dvcmtzcGFjZXMva2liYW5hL3NyYy9jb3JlL3NlcnZlci9wbHVnaW5zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7O0FBR0gsdURBQW1EO0FBRW5ELGdCQUFnQjtBQUNoQix5Q0FBa0Q7QUFBekMsMENBQUEsbUJBQW1CLENBQUE7QUFDNUIsbURBQWdGO0FBQXZFLG9EQUFBLHdCQUF3QixDQUFBO0FBQUUsOENBQUEsa0JBQWtCLENBQUE7QUFDckQsbUNBQXNDO0FBQTdCLDhCQUFBLFVBQVUsQ0FBQTtBQUVuQixnQkFBZ0I7QUFDaEIsTUFBYSxhQUFhO0lBR3hCLFlBQVksV0FBd0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGdDQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGO0FBTkQsc0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gRWxhc3RpY3NlYXJjaCBCLlYuIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yXG4gKiBsaWNlbnNlIGFncmVlbWVudHMuIFNlZSB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aFxuICogdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHRcbiAqIG93bmVyc2hpcC4gRWxhc3RpY3NlYXJjaCBCLlYuIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXJcbiAqIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXlcbiAqIG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29yZUNvbnRleHQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4vcGx1Z2luc19zZXJ2aWNlJztcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IHsgaXNOZXdQbGF0Zm9ybVBsdWdpbiB9IGZyb20gJy4vZGlzY292ZXJ5JztcbmV4cG9ydCB7IFBsdWdpbkluaXRpYWxpemVyQ29udGV4dCwgUGx1Z2luU3RhcnRDb250ZXh0IH0gZnJvbSAnLi9wbHVnaW5fY29udGV4dCc7XG5leHBvcnQgeyBQbHVnaW5OYW1lIH0gZnJvbSAnLi9wbHVnaW4nO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgUGx1Z2luc01vZHVsZSB7XG4gIHB1YmxpYyByZWFkb25seSBzZXJ2aWNlOiBQbHVnaW5zU2VydmljZTtcblxuICBjb25zdHJ1Y3Rvcihjb3JlQ29udGV4dDogQ29yZUNvbnRleHQpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBuZXcgUGx1Z2luc1NlcnZpY2UoY29yZUNvbnRleHQpO1xuICB9XG59XG4iXX0=
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
const util_1 = require("util");
const FAIL_TAG = Symbol('fail error');
function createFailError(reason, exitCode = 1) {
    return Object.assign(new Error(reason), {
        exitCode,
        [FAIL_TAG]: true,
    });
}
exports.createFailError = createFailError;
function isFailError(error) {
    return Boolean(error && error[FAIL_TAG]);
}
exports.isFailError = isFailError;
function combineErrors(errors) {
    if (errors.length === 1) {
        return errors[0];
    }
    const exitCode = errors
        .filter(isFailError)
        .reduce((acc, error) => Math.max(acc, error.exitCode), 1);
    const message = errors.reduce((acc, error) => {
        if (isFailError(error)) {
            return acc + '\n' + error.message;
        }
        return acc + `\nUNHANDLED ERROR\n${util_1.inspect(error)}`;
    }, '');
    return createFailError(`${errors.length} errors:\n${message}`, exitCode);
}
exports.combineErrors = combineErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEvc3JjL2Rldi9ydW4vZmFpbC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEvc3JjL2Rldi9ydW4vZmFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHOztBQUVILCtCQUErQjtBQUUvQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFPdEMsU0FBZ0IsZUFBZSxDQUFDLE1BQWMsRUFBRSxRQUFRLEdBQUcsQ0FBQztJQUMxRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdEMsUUFBUTtRQUNSLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBWTtLQUN6QixDQUFDLENBQUM7QUFDTCxDQUFDO0FBTEQsMENBS0M7QUFFRCxTQUFnQixXQUFXLENBQUMsS0FBVTtJQUNwQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE1BQWdDO0lBQzVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNO1NBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDbkIsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDM0MsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDbkM7UUFFRCxPQUFPLEdBQUcsR0FBRyxzQkFBc0IsY0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxhQUFhLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzNFLENBQUM7QUFsQkQsc0NBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIEVsYXN0aWNzZWFyY2ggQi5WLiB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvclxuICogbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWUgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGhcbiAqIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0XG4gKiBvd25lcnNoaXAuIEVsYXN0aWNzZWFyY2ggQi5WLiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyXG4gKiB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5XG4gKiBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJztcblxuY29uc3QgRkFJTF9UQUcgPSBTeW1ib2woJ2ZhaWwgZXJyb3InKTtcblxuaW50ZXJmYWNlIEZhaWxFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgZXhpdENvZGU6IG51bWJlcjtcbiAgW0ZBSUxfVEFHXTogdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZhaWxFcnJvcihyZWFzb246IHN0cmluZywgZXhpdENvZGUgPSAxKTogRmFpbEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKHJlYXNvbiksIHtcbiAgICBleGl0Q29kZSxcbiAgICBbRkFJTF9UQUddOiB0cnVlIGFzIHRydWUsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGYWlsRXJyb3IoZXJyb3I6IGFueSk6IGVycm9yIGlzIEZhaWxFcnJvciB7XG4gIHJldHVybiBCb29sZWFuKGVycm9yICYmIGVycm9yW0ZBSUxfVEFHXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lRXJyb3JzKGVycm9yczogQXJyYXk8RXJyb3IgfCBGYWlsRXJyb3I+KSB7XG4gIGlmIChlcnJvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGVycm9yc1swXTtcbiAgfVxuXG4gIGNvbnN0IGV4aXRDb2RlID0gZXJyb3JzXG4gICAgLmZpbHRlcihpc0ZhaWxFcnJvcilcbiAgICAucmVkdWNlKChhY2MsIGVycm9yKSA9PiBNYXRoLm1heChhY2MsIGVycm9yLmV4aXRDb2RlKSwgMSk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGVycm9ycy5yZWR1Y2UoKGFjYywgZXJyb3IpID0+IHtcbiAgICBpZiAoaXNGYWlsRXJyb3IoZXJyb3IpKSB7XG4gICAgICByZXR1cm4gYWNjICsgJ1xcbicgKyBlcnJvci5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2MgKyBgXFxuVU5IQU5ETEVEIEVSUk9SXFxuJHtpbnNwZWN0KGVycm9yKX1gO1xuICB9LCAnJyk7XG5cbiAgcmV0dXJuIGNyZWF0ZUZhaWxFcnJvcihgJHtlcnJvcnMubGVuZ3RofSBlcnJvcnM6XFxuJHttZXNzYWdlfWAsIGV4aXRDb2RlKTtcbn1cbiJdfQ==
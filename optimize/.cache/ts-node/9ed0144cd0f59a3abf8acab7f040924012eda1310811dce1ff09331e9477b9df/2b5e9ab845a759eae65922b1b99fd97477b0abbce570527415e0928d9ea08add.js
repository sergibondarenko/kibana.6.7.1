"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const last_1 = require("../processors/last");
function createNodeRequestBody(options) {
    const requestProcessor = last_1.createLastNProcessor(options);
    const doc = {};
    const body = requestProcessor(doc);
    return body;
}
exports.createNodeRequestBody = createNodeRequestBody;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvaW5mcmEvc2VydmVyL2xpYi9hZGFwdGVycy9ub2Rlcy9saWIvY3JlYXRlX25vZGVfcmVxdWVzdF9ib2R5LnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS94LXBhY2svcGx1Z2lucy9pbmZyYS9zZXJ2ZXIvbGliL2FkYXB0ZXJzL25vZGVzL2xpYi9jcmVhdGVfbm9kZV9yZXF1ZXN0X2JvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBR0gsNkNBQTBEO0FBRTFELFNBQWdCLHFCQUFxQixDQUFDLE9BQW9DO0lBQ3hFLE1BQU0sZ0JBQWdCLEdBQUcsMkJBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsTUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBTEQsc0RBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IEVsYXN0aWNzZWFyY2ggQi5WLiBhbmQvb3IgbGljZW5zZWQgdG8gRWxhc3RpY3NlYXJjaCBCLlYuIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIExpY2Vuc2VkIHVuZGVyIHRoZSBFbGFzdGljIExpY2Vuc2U7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIEVsYXN0aWMgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmZyYUVTU2VhcmNoQm9keSwgSW5mcmFQcm9jZXNvclJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vYWRhcHRlcl90eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVMYXN0TlByb2Nlc3NvciB9IGZyb20gJy4uL3Byb2Nlc3NvcnMvbGFzdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlUmVxdWVzdEJvZHkob3B0aW9uczogSW5mcmFQcm9jZXNvclJlcXVlc3RPcHRpb25zKTogSW5mcmFFU1NlYXJjaEJvZHkge1xuICBjb25zdCByZXF1ZXN0UHJvY2Vzc29yID0gY3JlYXRlTGFzdE5Qcm9jZXNzb3Iob3B0aW9ucyk7XG4gIGNvbnN0IGRvYyA9IHt9O1xuICBjb25zdCBib2R5ID0gcmVxdWVzdFByb2Nlc3Nvcihkb2MpO1xuICByZXR1cm4gYm9keTtcbn1cbiJdfQ==
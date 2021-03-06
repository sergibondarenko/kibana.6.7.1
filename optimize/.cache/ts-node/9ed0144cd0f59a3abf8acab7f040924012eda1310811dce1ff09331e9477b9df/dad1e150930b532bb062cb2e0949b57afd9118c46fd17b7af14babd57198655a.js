"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const monitors_1 = require("./monitors");
const pings_1 = require("./pings");
const unsigned_int_scalar_1 = require("./unsigned_int_scalar");
var constants_1 = require("./constants");
exports.DEFAULT_GRAPHQL_PATH = constants_1.DEFAULT_GRAPHQL_PATH;
exports.resolvers = [
    pings_1.createPingsResolvers,
    unsigned_int_scalar_1.unsignedIntegerResolverFunctions,
    monitors_1.createMonitorsResolvers,
];
exports.typeDefs = [pings_1.pingsSchema, unsigned_int_scalar_1.unsignedIntegerSchema, monitors_1.monitorsSchema];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvdXB0aW1lL3NlcnZlci9ncmFwaHFsL2luZGV4LnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS94LXBhY2svcGx1Z2lucy91cHRpbWUvc2VydmVyL2dyYXBocWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgseUNBQXFFO0FBQ3JFLG1DQUE0RDtBQUU1RCwrREFBZ0c7QUFFaEcseUNBQW1EO0FBQTFDLDJDQUFBLG9CQUFvQixDQUFBO0FBQ2hCLFFBQUEsU0FBUyxHQUErQjtJQUNuRCw0QkFBb0I7SUFDcEIsc0RBQWdDO0lBQ2hDLGtDQUF1QjtDQUN4QixDQUFDO0FBQ1csUUFBQSxRQUFRLEdBQVUsQ0FBQyxtQkFBVyxFQUFFLDJDQUFxQixFQUFFLHlCQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgRWxhc3RpY3NlYXJjaCBCLlYuIGFuZC9vciBsaWNlbnNlZCB0byBFbGFzdGljc2VhcmNoIEIuVi4gdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gTGljZW5zZWQgdW5kZXIgdGhlIEVsYXN0aWMgTGljZW5zZTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgRWxhc3RpYyBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNyZWF0ZU1vbml0b3JzUmVzb2x2ZXJzLCBtb25pdG9yc1NjaGVtYSB9IGZyb20gJy4vbW9uaXRvcnMnO1xuaW1wb3J0IHsgY3JlYXRlUGluZ3NSZXNvbHZlcnMsIHBpbmdzU2NoZW1hIH0gZnJvbSAnLi9waW5ncyc7XG5pbXBvcnQgeyBDcmVhdGVVTUdyYXBoUUxSZXNvbHZlcnMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVuc2lnbmVkSW50ZWdlclJlc29sdmVyRnVuY3Rpb25zLCB1bnNpZ25lZEludGVnZXJTY2hlbWEgfSBmcm9tICcuL3Vuc2lnbmVkX2ludF9zY2FsYXInO1xuXG5leHBvcnQgeyBERUZBVUxUX0dSQVBIUUxfUEFUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCBjb25zdCByZXNvbHZlcnM6IENyZWF0ZVVNR3JhcGhRTFJlc29sdmVyc1tdID0gW1xuICBjcmVhdGVQaW5nc1Jlc29sdmVycyxcbiAgdW5zaWduZWRJbnRlZ2VyUmVzb2x2ZXJGdW5jdGlvbnMsXG4gIGNyZWF0ZU1vbml0b3JzUmVzb2x2ZXJzLFxuXTtcbmV4cG9ydCBjb25zdCB0eXBlRGVmczogYW55W10gPSBbcGluZ3NTY2hlbWEsIHVuc2lnbmVkSW50ZWdlclNjaGVtYSwgbW9uaXRvcnNTY2hlbWFdO1xuIl19
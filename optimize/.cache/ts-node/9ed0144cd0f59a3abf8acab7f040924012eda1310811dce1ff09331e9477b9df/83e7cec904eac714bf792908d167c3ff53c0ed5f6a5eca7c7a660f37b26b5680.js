"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi = tslib_1.__importStar(require("joi"));
exports.timestampSchema = Joi.number()
    .integer()
    .min(0);
exports.logEntryFieldsMappingSchema = Joi.object().keys({
    message: Joi.string().required(),
    tiebreaker: Joi.string().required(),
    time: Joi.string().required(),
});
exports.logEntryTimeSchema = Joi.object().keys({
    tiebreaker: Joi.number().integer(),
    time: exports.timestampSchema,
});
exports.indicesSchema = Joi.array().items(Joi.string());
exports.summaryBucketSizeSchema = Joi.object().keys({
    unit: Joi.string()
        .valid(['y', 'M', 'w', 'd', 'h', 'm', 's'])
        .required(),
    value: Joi.number()
        .integer()
        .min(0)
        .required(),
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvaW5mcmEvc2VydmVyL2xvZ2dpbmdfbGVnYWN5L3NjaGVtYXMudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FudGhvbnkvZ2l0X3dvcmtzcGFjZXMva2liYW5hL3gtcGFjay9wbHVnaW5zL2luZnJhL3NlcnZlci9sb2dnaW5nX2xlZ2FjeS9zY2hlbWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7QUFFSCxpREFBMkI7QUFFZCxRQUFBLGVBQWUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO0tBQ3hDLE9BQU8sRUFBRTtLQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVHLFFBQUEsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztJQUMzRCxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNoQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNuQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUM5QixDQUFDLENBQUM7QUFFVSxRQUFBLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEQsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsSUFBSSxFQUFFLHVCQUFlO0NBQ3RCLENBQUMsQ0FBQztBQUVVLFFBQUEsYUFBYSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFFaEQsUUFBQSx1QkFBdUIsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3ZELElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFO1NBQ2YsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDMUMsUUFBUSxFQUFFO0lBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUU7U0FDaEIsT0FBTyxFQUFFO1NBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNOLFFBQVEsRUFBRTtDQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgRWxhc3RpY3NlYXJjaCBCLlYuIGFuZC9vciBsaWNlbnNlZCB0byBFbGFzdGljc2VhcmNoIEIuVi4gdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gTGljZW5zZWQgdW5kZXIgdGhlIEVsYXN0aWMgTGljZW5zZTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgRWxhc3RpYyBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIEpvaSBmcm9tICdqb2knO1xuXG5leHBvcnQgY29uc3QgdGltZXN0YW1wU2NoZW1hID0gSm9pLm51bWJlcigpXG4gIC5pbnRlZ2VyKClcbiAgLm1pbigwKTtcblxuZXhwb3J0IGNvbnN0IGxvZ0VudHJ5RmllbGRzTWFwcGluZ1NjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgbWVzc2FnZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIHRpZWJyZWFrZXI6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICB0aW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9nRW50cnlUaW1lU2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICB0aWVicmVha2VyOiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLFxuICB0aW1lOiB0aW1lc3RhbXBTY2hlbWEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGluZGljZXNTY2hlbWEgPSBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpO1xuXG5leHBvcnQgY29uc3Qgc3VtbWFyeUJ1Y2tldFNpemVTY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gIHVuaXQ6IEpvaS5zdHJpbmcoKVxuICAgIC52YWxpZChbJ3knLCAnTScsICd3JywgJ2QnLCAnaCcsICdtJywgJ3MnXSlcbiAgICAucmVxdWlyZWQoKSxcbiAgdmFsdWU6IEpvaS5udW1iZXIoKVxuICAgIC5pbnRlZ2VyKClcbiAgICAubWluKDApXG4gICAgLnJlcXVpcmVkKCksXG59KTtcbiJdfQ==
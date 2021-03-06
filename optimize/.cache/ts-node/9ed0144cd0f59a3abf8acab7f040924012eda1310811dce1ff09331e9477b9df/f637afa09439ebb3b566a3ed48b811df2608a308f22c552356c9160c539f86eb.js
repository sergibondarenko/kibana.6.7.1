"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const adjacent_search_results_1 = require("./adjacent_search_results");
const contained_search_results_1 = require("./contained_search_results");
const search_summary_1 = require("./search_summary");
exports.initLegacyLoggingRoutes = (framework) => {
    adjacent_search_results_1.initAdjacentSearchResultsRoutes(framework);
    contained_search_results_1.initContainedSearchResultsRoutes(framework);
    search_summary_1.initSearchSummaryRoutes(framework);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvaW5mcmEvc2VydmVyL2xvZ2dpbmdfbGVnYWN5L2luZGV4LnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS94LXBhY2svcGx1Z2lucy9pbmZyYS9zZXJ2ZXIvbG9nZ2luZ19sZWdhY3kvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBR0gsdUVBQTRFO0FBQzVFLHlFQUE4RTtBQUM5RSxxREFBMkQ7QUFFOUMsUUFBQSx1QkFBdUIsR0FBRyxDQUFDLFNBQXVDLEVBQUUsRUFBRTtJQUNqRix5REFBK0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQywyREFBZ0MsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1Qyx3Q0FBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IEVsYXN0aWNzZWFyY2ggQi5WLiBhbmQvb3IgbGljZW5zZWQgdG8gRWxhc3RpY3NlYXJjaCBCLlYuIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIExpY2Vuc2VkIHVuZGVyIHRoZSBFbGFzdGljIExpY2Vuc2U7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIEVsYXN0aWMgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmZyYUJhY2tlbmRGcmFtZXdvcmtBZGFwdGVyIH0gZnJvbSAnLi4vbGliL2FkYXB0ZXJzL2ZyYW1ld29yayc7XG5pbXBvcnQgeyBpbml0QWRqYWNlbnRTZWFyY2hSZXN1bHRzUm91dGVzIH0gZnJvbSAnLi9hZGphY2VudF9zZWFyY2hfcmVzdWx0cyc7XG5pbXBvcnQgeyBpbml0Q29udGFpbmVkU2VhcmNoUmVzdWx0c1JvdXRlcyB9IGZyb20gJy4vY29udGFpbmVkX3NlYXJjaF9yZXN1bHRzJztcbmltcG9ydCB7IGluaXRTZWFyY2hTdW1tYXJ5Um91dGVzIH0gZnJvbSAnLi9zZWFyY2hfc3VtbWFyeSc7XG5cbmV4cG9ydCBjb25zdCBpbml0TGVnYWN5TG9nZ2luZ1JvdXRlcyA9IChmcmFtZXdvcms6IEluZnJhQmFja2VuZEZyYW1ld29ya0FkYXB0ZXIpID0+IHtcbiAgaW5pdEFkamFjZW50U2VhcmNoUmVzdWx0c1JvdXRlcyhmcmFtZXdvcmspO1xuICBpbml0Q29udGFpbmVkU2VhcmNoUmVzdWx0c1JvdXRlcyhmcmFtZXdvcmspO1xuICBpbml0U2VhcmNoU3VtbWFyeVJvdXRlcyhmcmFtZXdvcmspO1xufTtcbiJdfQ==
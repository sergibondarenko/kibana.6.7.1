"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class InfraMetricsDomain {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async getMetrics(req, options) {
        return await this.adapter.getMetrics(req, options);
    }
}
exports.InfraMetricsDomain = InfraMetricsDomain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvaW5mcmEvc2VydmVyL2xpYi9kb21haW5zL21ldHJpY3NfZG9tYWluLnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS94LXBhY2svcGx1Z2lucy9pbmZyYS9zZXJ2ZXIvbGliL2RvbWFpbnMvbWV0cmljc19kb21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBTUgsTUFBYSxrQkFBa0I7SUFHN0IsWUFBWSxPQUE0QjtRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU0sS0FBSyxDQUFDLFVBQVUsQ0FDckIsR0FBMEIsRUFDMUIsT0FBbUM7UUFFbkMsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7QUFiRCxnREFhQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgRWxhc3RpY3NlYXJjaCBCLlYuIGFuZC9vciBsaWNlbnNlZCB0byBFbGFzdGljc2VhcmNoIEIuVi4gdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gTGljZW5zZWQgdW5kZXIgdGhlIEVsYXN0aWMgTGljZW5zZTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgRWxhc3RpYyBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEluZnJhTWV0cmljRGF0YSB9IGZyb20gJy4uLy4uL2dyYXBocWwvdHlwZXMnO1xuaW1wb3J0IHsgSW5mcmFGcmFtZXdvcmtSZXF1ZXN0IH0gZnJvbSAnLi4vYWRhcHRlcnMvZnJhbWV3b3JrL2FkYXB0ZXJfdHlwZXMnO1xuaW1wb3J0IHsgSW5mcmFNZXRyaWNzQWRhcHRlciwgSW5mcmFNZXRyaWNzUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9hZGFwdGVycy9tZXRyaWNzL2FkYXB0ZXJfdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgSW5mcmFNZXRyaWNzRG9tYWluIHtcbiAgcHJpdmF0ZSBhZGFwdGVyOiBJbmZyYU1ldHJpY3NBZGFwdGVyO1xuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IEluZnJhTWV0cmljc0FkYXB0ZXIpIHtcbiAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldE1ldHJpY3MoXG4gICAgcmVxOiBJbmZyYUZyYW1ld29ya1JlcXVlc3QsXG4gICAgb3B0aW9uczogSW5mcmFNZXRyaWNzUmVxdWVzdE9wdGlvbnNcbiAgKTogUHJvbWlzZTxJbmZyYU1ldHJpY0RhdGFbXT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmFkYXB0ZXIuZ2V0TWV0cmljcyhyZXEsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
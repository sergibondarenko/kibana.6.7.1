"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../../common/types");
async function incrementUIReindexOptionCounter(server, uiOpenOptionCounter) {
    const { getSavedObjectsRepository } = server.savedObjects;
    const { callWithInternalUser } = server.plugins.elasticsearch.getCluster('admin');
    const internalRepository = getSavedObjectsRepository(callWithInternalUser);
    await internalRepository.incrementCounter(types_1.UPGRADE_ASSISTANT_TYPE, types_1.UPGRADE_ASSISTANT_DOC_ID, `ui_reindex.${uiOpenOptionCounter}`);
}
async function upsertUIReindexOption(server, req) {
    const { close, open, start, stop } = req.payload;
    if (close) {
        await incrementUIReindexOptionCounter(server, 'close');
    }
    if (open) {
        await incrementUIReindexOptionCounter(server, 'open');
    }
    if (start) {
        await incrementUIReindexOptionCounter(server, 'start');
    }
    if (stop) {
        await incrementUIReindexOptionCounter(server, 'stop');
    }
    return {
        close,
        open,
        start,
        stop,
    };
}
exports.upsertUIReindexOption = upsertUIReindexOption;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvdXBncmFkZV9hc3Npc3RhbnQvc2VydmVyL2xpYi90ZWxlbWV0cnkvZXNfdWlfcmVpbmRleF9hcGlzLnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS94LXBhY2svcGx1Z2lucy91cGdyYWRlX2Fzc2lzdGFudC9zZXJ2ZXIvbGliL3RlbGVtZXRyeS9lc191aV9yZWluZGV4X2FwaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBR0gsaURBTStCO0FBRS9CLEtBQUssVUFBVSwrQkFBK0IsQ0FDNUMsTUFBdUMsRUFDdkMsbUJBQW9DO0lBRXBDLE1BQU0sRUFBRSx5QkFBeUIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDMUQsTUFBTSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xGLE1BQU0sa0JBQWtCLEdBQUcseUJBQXlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUUzRSxNQUFNLGtCQUFrQixDQUFDLGdCQUFnQixDQUN2Qyw4QkFBc0IsRUFDdEIsZ0NBQXdCLEVBQ3hCLGNBQWMsbUJBQW1CLEVBQUUsQ0FDcEMsQ0FBQztBQUNKLENBQUM7QUFFTSxLQUFLLFVBQVUscUJBQXFCLENBQ3pDLE1BQXVDLEVBQ3ZDLEdBQW1CO0lBRW5CLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBb0IsQ0FBQztJQUU5RCxJQUFJLEtBQUssRUFBRTtRQUNULE1BQU0sK0JBQStCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsSUFBSSxJQUFJLEVBQUU7UUFDUixNQUFNLCtCQUErQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN2RDtJQUVELElBQUksS0FBSyxFQUFFO1FBQ1QsTUFBTSwrQkFBK0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxJQUFJLElBQUksRUFBRTtRQUNSLE1BQU0sK0JBQStCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZEO0lBRUQsT0FBTztRQUNMLEtBQUs7UUFDTCxJQUFJO1FBQ0osS0FBSztRQUNMLElBQUk7S0FDTCxDQUFDO0FBQ0osQ0FBQztBQTVCRCxzREE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IEVsYXN0aWNzZWFyY2ggQi5WLiBhbmQvb3IgbGljZW5zZWQgdG8gRWxhc3RpY3NlYXJjaCBCLlYuIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIExpY2Vuc2VkIHVuZGVyIHRoZSBFbGFzdGljIExpY2Vuc2U7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIEVsYXN0aWMgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBMZWdhY3kgfSBmcm9tICdraWJhbmEnO1xuaW1wb3J0IHtcbiAgVUlSZWluZGV4LFxuICBVSVJlaW5kZXhPcHRpb24sXG4gIFVQR1JBREVfQVNTSVNUQU5UX0RPQ19JRCxcbiAgVVBHUkFERV9BU1NJU1RBTlRfVFlQRSxcbiAgVXBncmFkZUFzc2lzdGFudFRlbGVtZXRyeVNlcnZlcixcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3R5cGVzJztcblxuYXN5bmMgZnVuY3Rpb24gaW5jcmVtZW50VUlSZWluZGV4T3B0aW9uQ291bnRlcihcbiAgc2VydmVyOiBVcGdyYWRlQXNzaXN0YW50VGVsZW1ldHJ5U2VydmVyLFxuICB1aU9wZW5PcHRpb25Db3VudGVyOiBVSVJlaW5kZXhPcHRpb25cbikge1xuICBjb25zdCB7IGdldFNhdmVkT2JqZWN0c1JlcG9zaXRvcnkgfSA9IHNlcnZlci5zYXZlZE9iamVjdHM7XG4gIGNvbnN0IHsgY2FsbFdpdGhJbnRlcm5hbFVzZXIgfSA9IHNlcnZlci5wbHVnaW5zLmVsYXN0aWNzZWFyY2guZ2V0Q2x1c3RlcignYWRtaW4nKTtcbiAgY29uc3QgaW50ZXJuYWxSZXBvc2l0b3J5ID0gZ2V0U2F2ZWRPYmplY3RzUmVwb3NpdG9yeShjYWxsV2l0aEludGVybmFsVXNlcik7XG5cbiAgYXdhaXQgaW50ZXJuYWxSZXBvc2l0b3J5LmluY3JlbWVudENvdW50ZXIoXG4gICAgVVBHUkFERV9BU1NJU1RBTlRfVFlQRSxcbiAgICBVUEdSQURFX0FTU0lTVEFOVF9ET0NfSUQsXG4gICAgYHVpX3JlaW5kZXguJHt1aU9wZW5PcHRpb25Db3VudGVyfWBcbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFVJUmVpbmRleE9wdGlvbihcbiAgc2VydmVyOiBVcGdyYWRlQXNzaXN0YW50VGVsZW1ldHJ5U2VydmVyLFxuICByZXE6IExlZ2FjeS5SZXF1ZXN0XG4pOiBQcm9taXNlPFVJUmVpbmRleD4ge1xuICBjb25zdCB7IGNsb3NlLCBvcGVuLCBzdGFydCwgc3RvcCB9ID0gcmVxLnBheWxvYWQgYXMgVUlSZWluZGV4O1xuXG4gIGlmIChjbG9zZSkge1xuICAgIGF3YWl0IGluY3JlbWVudFVJUmVpbmRleE9wdGlvbkNvdW50ZXIoc2VydmVyLCAnY2xvc2UnKTtcbiAgfVxuXG4gIGlmIChvcGVuKSB7XG4gICAgYXdhaXQgaW5jcmVtZW50VUlSZWluZGV4T3B0aW9uQ291bnRlcihzZXJ2ZXIsICdvcGVuJyk7XG4gIH1cblxuICBpZiAoc3RhcnQpIHtcbiAgICBhd2FpdCBpbmNyZW1lbnRVSVJlaW5kZXhPcHRpb25Db3VudGVyKHNlcnZlciwgJ3N0YXJ0Jyk7XG4gIH1cblxuICBpZiAoc3RvcCkge1xuICAgIGF3YWl0IGluY3JlbWVudFVJUmVpbmRleE9wdGlvbkNvdW50ZXIoc2VydmVyLCAnc3RvcCcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zZSxcbiAgICBvcGVuLFxuICAgIHN0YXJ0LFxuICAgIHN0b3AsXG4gIH07XG59XG4iXX0=
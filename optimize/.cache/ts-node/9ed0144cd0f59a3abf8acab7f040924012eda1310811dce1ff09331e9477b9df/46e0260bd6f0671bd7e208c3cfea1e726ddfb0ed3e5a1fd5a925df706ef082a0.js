"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getNextMidnight() {
    const nextMidnight = new Date();
    nextMidnight.setHours(0, 0, 0, 0);
    nextMidnight.setDate(nextMidnight.getDate() + 1);
    return nextMidnight.toISOString();
}
exports.getNextMidnight = getNextMidnight;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvb3NzX3RlbGVtZXRyeS9zZXJ2ZXIvbGliL2dldF9uZXh0X21pZG5pZ2h0LnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS94LXBhY2svcGx1Z2lucy9vc3NfdGVsZW1ldHJ5L3NlcnZlci9saWIvZ2V0X25leHRfbWlkbmlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsU0FBZ0IsZUFBZTtJQUM3QixNQUFNLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2hDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDcEMsQ0FBQztBQUxELDBDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCBFbGFzdGljc2VhcmNoIEIuVi4gYW5kL29yIGxpY2Vuc2VkIHRvIEVsYXN0aWNzZWFyY2ggQi5WLiB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBMaWNlbnNlZCB1bmRlciB0aGUgRWxhc3RpYyBMaWNlbnNlO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBFbGFzdGljIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRNaWRuaWdodCgpIHtcbiAgY29uc3QgbmV4dE1pZG5pZ2h0ID0gbmV3IERhdGUoKTtcbiAgbmV4dE1pZG5pZ2h0LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBuZXh0TWlkbmlnaHQuc2V0RGF0ZShuZXh0TWlkbmlnaHQuZ2V0RGF0ZSgpICsgMSk7XG4gIHJldHVybiBuZXh0TWlkbmlnaHQudG9JU09TdHJpbmcoKTtcbn1cbiJdfQ==
"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function findNonExistentItems(items, requestedItems) {
    return requestedItems.reduce((nonExistentItems, requestedItem, idx) => {
        if (items.findIndex((item) => item && item.id === requestedItem) === -1) {
            nonExistentItems.push(requestedItems[idx]);
        }
        return nonExistentItems;
    }, []);
}
exports.findNonExistentItems = findNonExistentItems;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvYmVhdHNfbWFuYWdlbWVudC9zZXJ2ZXIvdXRpbHMvZmluZF9ub25fZXhpc3RlbnRfaXRlbXMudHMiLCJzb3VyY2VzIjpbIi9ob21lL2FudGhvbnkvZ2l0X3dvcmtzcGFjZXMva2liYW5hL3gtcGFjay9wbHVnaW5zL2JlYXRzX21hbmFnZW1lbnQvc2VydmVyL3V0aWxzL2ZpbmRfbm9uX2V4aXN0ZW50X2l0ZW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQU9ILFNBQWdCLG9CQUFvQixDQUFDLEtBQW1CLEVBQUUsY0FBbUI7SUFDM0UsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQTBCLEVBQUUsYUFBcUIsRUFBRSxHQUFXLEVBQUUsRUFBRTtRQUM5RixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFQRCxvREFPQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgRWxhc3RpY3NlYXJjaCBCLlYuIGFuZC9vciBsaWNlbnNlZCB0byBFbGFzdGljc2VhcmNoIEIuVi4gdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gTGljZW5zZWQgdW5kZXIgdGhlIEVsYXN0aWMgTGljZW5zZTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgRWxhc3RpYyBMaWNlbnNlLlxuICovXG5cbmludGVyZmFjZSBSYW5kb21JdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZE5vbkV4aXN0ZW50SXRlbXMoaXRlbXM6IFJhbmRvbUl0ZW1bXSwgcmVxdWVzdGVkSXRlbXM6IGFueSkge1xuICByZXR1cm4gcmVxdWVzdGVkSXRlbXMucmVkdWNlKChub25FeGlzdGVudEl0ZW1zOiBzdHJpbmdbXSwgcmVxdWVzdGVkSXRlbTogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChpdGVtcy5maW5kSW5kZXgoKGl0ZW06IFJhbmRvbUl0ZW0pID0+IGl0ZW0gJiYgaXRlbS5pZCA9PT0gcmVxdWVzdGVkSXRlbSkgPT09IC0xKSB7XG4gICAgICBub25FeGlzdGVudEl0ZW1zLnB1c2gocmVxdWVzdGVkSXRlbXNbaWR4XSk7XG4gICAgfVxuICAgIHJldHVybiBub25FeGlzdGVudEl0ZW1zO1xuICB9LCBbXSk7XG59XG4iXX0=
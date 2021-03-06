"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["Millisecond"] = 1] = "Millisecond";
    TimeUnit[TimeUnit["Second"] = 1000] = "Second";
    TimeUnit[TimeUnit["Minute"] = 60000] = "Minute";
    TimeUnit[TimeUnit["Hour"] = 3600000] = "Hour";
    TimeUnit[TimeUnit["Day"] = 86400000] = "Day";
    TimeUnit[TimeUnit["Month"] = 2592000000] = "Month";
    TimeUnit[TimeUnit["Year"] = 31104000000] = "Year";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
exports.timeUnitLabels = {
    [TimeUnit.Millisecond]: 'ms',
    [TimeUnit.Second]: 's',
    [TimeUnit.Minute]: 'm',
    [TimeUnit.Hour]: 'h',
    [TimeUnit.Day]: 'd',
    [TimeUnit.Month]: 'M',
    [TimeUnit.Year]: 'y',
};
exports.elasticSearchTimeUnits = {
    [TimeUnit.Second]: 's',
    [TimeUnit.Minute]: 'm',
    [TimeUnit.Hour]: 'h',
    [TimeUnit.Day]: 'd',
    [TimeUnit.Month]: 'M',
    [TimeUnit.Year]: 'y',
};
exports.getElasticSearchTimeUnit = (scale) => exports.elasticSearchTimeUnits[scale];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvaW5mcmEvY29tbW9uL3RpbWUvdGltZV91bml0LnRzIiwic291cmNlcyI6WyIvaG9tZS9hbnRob255L2dpdF93b3Jrc3BhY2VzL2tpYmFuYS94LXBhY2svcGx1Z2lucy9pbmZyYS9jb21tb24vdGltZS90aW1lX3VuaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsSUFBWSxRQVFYO0FBUkQsV0FBWSxRQUFRO0lBQ2xCLHFEQUFlLENBQUE7SUFDZiw4Q0FBMkIsQ0FBQTtJQUMzQiwrQ0FBb0IsQ0FBQTtJQUNwQiw2Q0FBa0IsQ0FBQTtJQUNsQiw0Q0FBZSxDQUFBO0lBQ2Ysa0RBQWdCLENBQUE7SUFDaEIsaURBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBUW5CO0FBSVksUUFBQSxjQUFjLEdBQUc7SUFDNUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSTtJQUM1QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHO0lBQ3RCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUc7SUFDdEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztJQUNwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHO0lBQ25CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUc7SUFDckIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztDQUNyQixDQUFDO0FBRVcsUUFBQSxzQkFBc0IsR0FFL0I7SUFDRixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHO0lBQ3RCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUc7SUFDdEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztJQUNwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHO0lBQ25CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUc7SUFDckIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztDQUNyQixDQUFDO0FBRVcsUUFBQSx3QkFBd0IsR0FBRyxDQUFDLEtBQWUsRUFBeUIsRUFBRSxDQUNqRiw4QkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgRWxhc3RpY3NlYXJjaCBCLlYuIGFuZC9vciBsaWNlbnNlZCB0byBFbGFzdGljc2VhcmNoIEIuVi4gdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gTGljZW5zZWQgdW5kZXIgdGhlIEVsYXN0aWMgTGljZW5zZTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgRWxhc3RpYyBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBlbnVtIFRpbWVVbml0IHtcbiAgTWlsbGlzZWNvbmQgPSAxLFxuICBTZWNvbmQgPSBNaWxsaXNlY29uZCAqIDEwMDAsXG4gIE1pbnV0ZSA9IFNlY29uZCAqIDYwLFxuICBIb3VyID0gTWludXRlICogNjAsXG4gIERheSA9IEhvdXIgKiAyNCxcbiAgTW9udGggPSBEYXkgKiAzMCxcbiAgWWVhciA9IE1vbnRoICogMTIsXG59XG5cbmV4cG9ydCB0eXBlIEVsYXN0aWNzZWFyY2hUaW1lVW5pdCA9ICdzJyB8ICdtJyB8ICdoJyB8ICdkJyB8ICdNJyB8ICd5JztcblxuZXhwb3J0IGNvbnN0IHRpbWVVbml0TGFiZWxzID0ge1xuICBbVGltZVVuaXQuTWlsbGlzZWNvbmRdOiAnbXMnLFxuICBbVGltZVVuaXQuU2Vjb25kXTogJ3MnLFxuICBbVGltZVVuaXQuTWludXRlXTogJ20nLFxuICBbVGltZVVuaXQuSG91cl06ICdoJyxcbiAgW1RpbWVVbml0LkRheV06ICdkJyxcbiAgW1RpbWVVbml0Lk1vbnRoXTogJ00nLFxuICBbVGltZVVuaXQuWWVhcl06ICd5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBlbGFzdGljU2VhcmNoVGltZVVuaXRzOiB7XG4gIFtrZXk6IHN0cmluZ106IEVsYXN0aWNzZWFyY2hUaW1lVW5pdDtcbn0gPSB7XG4gIFtUaW1lVW5pdC5TZWNvbmRdOiAncycsXG4gIFtUaW1lVW5pdC5NaW51dGVdOiAnbScsXG4gIFtUaW1lVW5pdC5Ib3VyXTogJ2gnLFxuICBbVGltZVVuaXQuRGF5XTogJ2QnLFxuICBbVGltZVVuaXQuTW9udGhdOiAnTScsXG4gIFtUaW1lVW5pdC5ZZWFyXTogJ3knLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEVsYXN0aWNTZWFyY2hUaW1lVW5pdCA9IChzY2FsZTogVGltZVVuaXQpOiBFbGFzdGljc2VhcmNoVGltZVVuaXQgPT5cbiAgZWxhc3RpY1NlYXJjaFRpbWVVbml0c1tzY2FsZV07XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("x-pack/plugins/apm/common/constants");
const get_bucket_size_1 = require("../../helpers/get_bucket_size");
async function fetch({ serviceName, setup }) {
    const { start, end, esFilterQuery, client, config } = setup;
    const { intervalString } = get_bucket_size_1.getBucketSize(start, end, 'auto');
    const filters = [
        { term: { [constants_1.SERVICE_NAME]: serviceName } },
        { term: { [constants_1.PROCESSOR_NAME]: 'metric' } },
        {
            range: { '@timestamp': { gte: start, lte: end, format: 'epoch_millis' } }
        },
        { exists: { field: constants_1.METRIC_SYSTEM_TOTAL_MEMORY } },
        { exists: { field: constants_1.METRIC_SYSTEM_FREE_MEMORY } }
    ];
    if (esFilterQuery) {
        filters.push(esFilterQuery);
    }
    const script = {
        lang: 'expression',
        source: `1 - doc['${constants_1.METRIC_SYSTEM_FREE_MEMORY}'] / doc['${constants_1.METRIC_SYSTEM_TOTAL_MEMORY}']`
    };
    const params = {
        index: config.get('apm_oss.metricsIndices'),
        body: {
            size: 0,
            query: { bool: { filter: filters } },
            aggs: {
                timeseriesData: {
                    date_histogram: {
                        field: '@timestamp',
                        interval: intervalString,
                        min_doc_count: 0,
                        extended_bounds: { min: start, max: end }
                    },
                    aggs: {
                        memoryUsedAvg: { avg: { script } },
                        memoryUsedMax: { max: { script } }
                    }
                },
                memoryUsedAvg: { avg: { script } },
                memoryUsedMax: { max: { script } }
            }
        }
    };
    return client('search', params);
}
exports.fetch = fetch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvYXBtL3NlcnZlci9saWIvbWV0cmljcy9nZXRfbWVtb3J5X2NoYXJ0X2RhdGEvZmV0Y2hlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvYW50aG9ueS9naXRfd29ya3NwYWNlcy9raWJhbmEveC1wYWNrL3BsdWdpbnMvYXBtL3NlcnZlci9saWIvbWV0cmljcy9nZXRfbWVtb3J5X2NoYXJ0X2RhdGEvZmV0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLG1FQUs2QztBQUM3QyxtRUFBOEQ7QUFrQnZELEtBQUssVUFBVSxLQUFLLENBQUMsRUFDMUIsV0FBVyxFQUNYLEtBQUssRUFDYztJQUNuQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUM1RCxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsK0JBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdELE1BQU0sT0FBTyxHQUFlO1FBQzFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyx3QkFBWSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUU7UUFDekMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLDBCQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUN4QztZQUNFLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEVBQUU7U0FDMUU7UUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxzQ0FBMEIsRUFBRSxFQUFFO1FBQ2pELEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLHFDQUF5QixFQUFFLEVBQUU7S0FDakQsQ0FBQztJQUVGLElBQUksYUFBYSxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDN0I7SUFFRCxNQUFNLE1BQU0sR0FBRztRQUNiLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxZQUFZLHFDQUF5QixhQUFhLHNDQUEwQixJQUFJO0tBQ3pGLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRztRQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFTLHdCQUF3QixDQUFDO1FBQ25ELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3BDLElBQUksRUFBRTtnQkFDSixjQUFjLEVBQUU7b0JBQ2QsY0FBYyxFQUFFO3dCQUNkLEtBQUssRUFBRSxZQUFZO3dCQUNuQixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsYUFBYSxFQUFFLENBQUM7d0JBQ2hCLGVBQWUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtxQkFDMUM7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGFBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUNsQyxhQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRTtxQkFDbkM7aUJBQ0Y7Z0JBQ0QsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xDLGFBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO2FBQ25DO1NBQ0Y7S0FDRixDQUFDO0lBRUYsT0FBTyxNQUFNLENBQWEsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFsREQsc0JBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCBFbGFzdGljc2VhcmNoIEIuVi4gYW5kL29yIGxpY2Vuc2VkIHRvIEVsYXN0aWNzZWFyY2ggQi5WLiB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBMaWNlbnNlZCB1bmRlciB0aGUgRWxhc3RpYyBMaWNlbnNlO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBFbGFzdGljIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEFnZ3JlZ2F0aW9uU2VhcmNoUmVzcG9uc2UsIEVTRmlsdGVyIH0gZnJvbSAnZWxhc3RpY3NlYXJjaCc7XG5pbXBvcnQge1xuICBNRVRSSUNfU1lTVEVNX0ZSRUVfTUVNT1JZLFxuICBNRVRSSUNfU1lTVEVNX1RPVEFMX01FTU9SWSxcbiAgUFJPQ0VTU09SX05BTUUsXG4gIFNFUlZJQ0VfTkFNRVxufSBmcm9tICd4LXBhY2svcGx1Z2lucy9hcG0vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRCdWNrZXRTaXplIH0gZnJvbSAnLi4vLi4vaGVscGVycy9nZXRfYnVja2V0X3NpemUnO1xuaW1wb3J0IHsgQWdnVmFsdWUsIE1ldHJpY3NSZXF1ZXN0QXJncywgVGltZVNlcmllc0J1Y2tldCB9IGZyb20gJy4uL3F1ZXJ5X3R5cGVzJztcblxuaW50ZXJmYWNlIEJ1Y2tldCBleHRlbmRzIFRpbWVTZXJpZXNCdWNrZXQge1xuICBtZW1vcnlVc2VkQXZnOiBBZ2dWYWx1ZTtcbiAgbWVtb3J5VXNlZE1heDogQWdnVmFsdWU7XG59XG5cbmludGVyZmFjZSBBZ2dzIHtcbiAgdGltZXNlcmllc0RhdGE6IHtcbiAgICBidWNrZXRzOiBCdWNrZXRbXTtcbiAgfTtcbiAgbWVtb3J5VXNlZEF2ZzogQWdnVmFsdWU7XG4gIG1lbW9yeVVzZWRNYXg6IEFnZ1ZhbHVlO1xufVxuXG5leHBvcnQgdHlwZSBFU1Jlc3BvbnNlID0gQWdncmVnYXRpb25TZWFyY2hSZXNwb25zZTx2b2lkLCBBZ2dzPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoKHtcbiAgc2VydmljZU5hbWUsXG4gIHNldHVwXG59OiBNZXRyaWNzUmVxdWVzdEFyZ3MpOiBQcm9taXNlPEVTUmVzcG9uc2U+IHtcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBlc0ZpbHRlclF1ZXJ5LCBjbGllbnQsIGNvbmZpZyB9ID0gc2V0dXA7XG4gIGNvbnN0IHsgaW50ZXJ2YWxTdHJpbmcgfSA9IGdldEJ1Y2tldFNpemUoc3RhcnQsIGVuZCwgJ2F1dG8nKTtcbiAgY29uc3QgZmlsdGVyczogRVNGaWx0ZXJbXSA9IFtcbiAgICB7IHRlcm06IHsgW1NFUlZJQ0VfTkFNRV06IHNlcnZpY2VOYW1lIH0gfSxcbiAgICB7IHRlcm06IHsgW1BST0NFU1NPUl9OQU1FXTogJ21ldHJpYycgfSB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiB7ICdAdGltZXN0YW1wJzogeyBndGU6IHN0YXJ0LCBsdGU6IGVuZCwgZm9ybWF0OiAnZXBvY2hfbWlsbGlzJyB9IH1cbiAgICB9LFxuICAgIHsgZXhpc3RzOiB7IGZpZWxkOiBNRVRSSUNfU1lTVEVNX1RPVEFMX01FTU9SWSB9IH0sXG4gICAgeyBleGlzdHM6IHsgZmllbGQ6IE1FVFJJQ19TWVNURU1fRlJFRV9NRU1PUlkgfSB9XG4gIF07XG5cbiAgaWYgKGVzRmlsdGVyUXVlcnkpIHtcbiAgICBmaWx0ZXJzLnB1c2goZXNGaWx0ZXJRdWVyeSk7XG4gIH1cblxuICBjb25zdCBzY3JpcHQgPSB7XG4gICAgbGFuZzogJ2V4cHJlc3Npb24nLFxuICAgIHNvdXJjZTogYDEgLSBkb2NbJyR7TUVUUklDX1NZU1RFTV9GUkVFX01FTU9SWX0nXSAvIGRvY1snJHtNRVRSSUNfU1lTVEVNX1RPVEFMX01FTU9SWX0nXWBcbiAgfTtcblxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgaW5kZXg6IGNvbmZpZy5nZXQ8c3RyaW5nPignYXBtX29zcy5tZXRyaWNzSW5kaWNlcycpLFxuICAgIGJvZHk6IHtcbiAgICAgIHNpemU6IDAsXG4gICAgICBxdWVyeTogeyBib29sOiB7IGZpbHRlcjogZmlsdGVycyB9IH0sXG4gICAgICBhZ2dzOiB7XG4gICAgICAgIHRpbWVzZXJpZXNEYXRhOiB7XG4gICAgICAgICAgZGF0ZV9oaXN0b2dyYW06IHtcbiAgICAgICAgICAgIGZpZWxkOiAnQHRpbWVzdGFtcCcsXG4gICAgICAgICAgICBpbnRlcnZhbDogaW50ZXJ2YWxTdHJpbmcsXG4gICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAwLFxuICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7IG1pbjogc3RhcnQsIG1heDogZW5kIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGFnZ3M6IHtcbiAgICAgICAgICAgIG1lbW9yeVVzZWRBdmc6IHsgYXZnOiB7IHNjcmlwdCB9IH0sXG4gICAgICAgICAgICBtZW1vcnlVc2VkTWF4OiB7IG1heDogeyBzY3JpcHQgfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZW1vcnlVc2VkQXZnOiB7IGF2ZzogeyBzY3JpcHQgfSB9LFxuICAgICAgICBtZW1vcnlVc2VkTWF4OiB7IG1heDogeyBzY3JpcHQgfSB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjbGllbnQ8dm9pZCwgQWdncz4oJ3NlYXJjaCcsIHBhcmFtcyk7XG59XG4iXX0=
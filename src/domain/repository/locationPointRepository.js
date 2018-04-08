import * as locationPointProjection from "./projections/locationPointProjection"
export class LocationPointRepository {
    constructor({ scanResultStore }) {
        this.scanResultStore = scanResultStore
    }

    getRecent(count = 10000) {
        return this.scanResultStore.findLatest(count)
            .map(locationPointProjection.project)
    }
}
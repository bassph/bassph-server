import * as dailyDataProjection from './projections/dailyDataProjection'
export class DailyDataRepository {
    constructor({ scanResultStore }) {
        this.scanResultStore = scanResultStore
    }

    fetch(carrier) {
        return this.scanResultStore.findSampleDataFor(carrier)
            .map(dailyDataProjection.project)
    }
}

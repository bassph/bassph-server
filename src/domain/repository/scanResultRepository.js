export class ScanResultRepository {
    constructor({ scanResultStore }) {
        this.scanResultStore = scanResultStore
    }
    save(scanResult) {
        return this.scanResultStore.save(scanResult)
    }
}
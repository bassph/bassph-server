
export class StoreScanResult {
    constructor({ scanResultRepository }) {
        this.scanResultRepo = scanResultRepository
    }
    execute(scanResult) {
        return this.scanResultRepo.save(scanResult)
    }
}

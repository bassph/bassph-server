export class ScanResultRepository {
    constructor({ scanResultStore, cellTowerRepository }) {
        this.scanResultStore = scanResultStore
        this.cellTowerRepository = cellTowerRepository
    }
    save(scanResult) {
        if (isValidCellTower(scanResult.cellTower)) {
            return this.cellTowerRepository.save(scanResult.cellTower).flatMap(cellTower => {
                scanResult.cellTower = cellTower
                return this.scanResultStore.save(scanResult)
            })
        }
        return this.scanResultStore.save(scanResult)
    }

    getAll(request) {
        return this.scanResultStore.getAll(request)
    }

    streamAll(request) {
        return this.scanResultStore.streamAll(request)
    }
}

const isValidCellTower = (cellTower) => {
    return cellTower != null &&
        cellTower.cid != null &&
        cellTower.mnc != null &&
        cellTower.mcc != null &&
        cellTower.lac != null
}
import { asClass } from 'awilix'
import { CellTowerLookupService } from '../infrastructure/service/cellTowerLookupService'
import { ScanResultStore } from '../infrastructure/source/scanResultStore'
import { CellTowerStore } from '../infrastructure/source/cellTowerStore'

export const cellTowerLookupServiceProvider = {
    cellTowerLookupService: asClass(CellTowerLookupService).singleton()
}

export const scanResultStoreProvider = {
    scanResultStore: asClass(ScanResultStore).singleton()
}

export const cellTowerStoreProvider = {
    cellTowerStore: asClass(CellTowerStore).singleton()
}
import { asClass } from 'awilix'
import { ScanResultRepository } from '../domain/repository/scanResultRepository'
import { LocationPointRepository } from '../domain/repository/locationPointRepository'
import { CellTowerRepository } from '../domain/repository/cellTowerRepository'
import { DailyDataRepository } from '../domain/repository/dailyDataRepository';

export const scanResultRepositoryProvider = {
    scanResultRepository: asClass(ScanResultRepository).singleton()
}

export const locationPointRepositoryProvider = {
    locationPointRepository: asClass(LocationPointRepository).singleton()
}

export const cellTowerRepositoryProvider = {
    cellTowerRepository: asClass(CellTowerRepository).singleton()
}

export const dailyDataRepositoryProvider = {
    dailyDataRepository: asClass(DailyDataRepository).singleton()
}
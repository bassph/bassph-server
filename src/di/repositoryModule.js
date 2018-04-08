import { asClass, Lifetime } from 'awilix'
import { ScanResultRepository } from '../domain/repository/scanResultRepository'
import { LocationPointRepository } from '../domain/repository/locationPointRepository'
import { ScanResultStore } from '../infrastructure/sources/scanResultStore'

export const scanResultRepositoryProvider = {
    scanResultRepository: asClass(ScanResultRepository).singleton()
}

export const locationPointRepositoryProvider = {
    locationPointRepository: asClass(LocationPointRepository).singleton()
}

export const scanResultStoreProvider = {
    scanResultStore: asClass(ScanResultStore).singleton()
}

import { asClass, Lifetime } from 'awilix'
import { ScanResultRepository } from '../domain/repository/scanResultRepository'
import { ScanResultStore } from '../infrastructure/sources/scanResultStore'

export const scanResultRepositoryProvider = {
    scanResultRepository: asClass(ScanResultRepository).singleton()
}

export const scanResultStoreProvider = {
    scanResultStore: asClass(ScanResultStore).singleton()
}

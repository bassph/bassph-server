import { asClass, Lifetime } from 'awilix'
import { StoreScanResult } from '../domain/interactors/StoreScanResult'
import { ShowRecentScanResultLocations } from '../domain/interactors/ShowRecentScanResultLocations'

export const storeScanResultProvider = {
    storeScanResult: asClass(StoreScanResult).singleton()
}

export const showRecentScanResultLocationsProvider = {
    showRecentScanResultLocations: asClass(ShowRecentScanResultLocations).singleton()
}
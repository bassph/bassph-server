import { asClass } from 'awilix'
import { StoreScanResult } from '../domain/interactors/StoreScanResult'
import { ShowRecentScanResultLocations } from '../domain/interactors/ShowRecentScanResultLocations'
import { ShowDailyData } from '../domain/interactors/ShowDailyData';

export const storeScanResultProvider = {
    storeScanResult: asClass(StoreScanResult).singleton()
}

export const showRecentScanResultLocationsProvider = {
    showRecentScanResultLocations: asClass(ShowRecentScanResultLocations).singleton()
}

export const showDailyDataProvider = {
    showDailyData: asClass(ShowDailyData).singleton()
}
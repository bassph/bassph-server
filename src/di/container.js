import { createContainer } from 'awilix'
import * as interactorModule from './interactorModule'
import * as repositoryModule from './repositoryModule'
import * as controllerModule from './controllerModule'
import * as infrastructureModule from './infrastructureModule'

export const container = createContainer()

container
    .register(controllerModule.scanResultControllerProvider)
    .register(controllerModule.locationPointControllerProvider)
    .register(controllerModule.dailyDataControllerProvider)
    .register(interactorModule.storeScanResultProvider)
    .register(interactorModule.showRecentScanResultLocationsProvider)
    .register(interactorModule.showDailyDataProvider)
    .register(repositoryModule.scanResultRepositoryProvider)
    .register(repositoryModule.cellTowerRepositoryProvider)
    .register(repositoryModule.locationPointRepositoryProvider)
    .register(repositoryModule.dailyDataRepositoryProvider)
    .register(infrastructureModule.cellTowerLookupServiceProvider)    
    .register(infrastructureModule.scanResultStoreProvider)
    .register(infrastructureModule.cellTowerStoreProvider)
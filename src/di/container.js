import { createContainer } from 'awilix'
import * as interactorModule from './interactorModule'
import * as repositoryModule from './repositoryModule'
import * as controllerModule from './controllerModule'
import * as infrastructureModule from './infrastructureModule'
import * as settingsModule from './settingsModule'
import * as persistenceModule from './persistenceModule'

export const container = createContainer()

container
    .register(settingsModule.mongoConnectionUrlProvider)
    .register(settingsModule.databaseNameProvider)
    .register(persistenceModule.persistenceManagerProvider)
    .register(controllerModule.scanResultControllerProvider)
    .register(controllerModule.locationPointControllerProvider)
    .register(controllerModule.dailyDataControllerProvider)
    .register(interactorModule.storeScanResultProvider)
    .register(interactorModule.showRecentScanResultLocationsProvider)
    .register(interactorModule.showDailyDataProvider)
    .register(interactorModule.showScanResultsProvider)
    .register(repositoryModule.scanResultRepositoryProvider)
    .register(repositoryModule.cellTowerRepositoryProvider)
    .register(repositoryModule.locationPointRepositoryProvider)
    .register(repositoryModule.dailyDataRepositoryProvider)
    .register(infrastructureModule.cellTowerLookupServiceProvider)
    .register(infrastructureModule.scanResultStoreProvider)
    .register(infrastructureModule.cellTowerStoreProvider)
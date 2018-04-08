import { createContainer } from 'awilix'
import * as interactorModule from './interactorModule'
import * as repositoryModule from './repositoryModule'
import * as controllerModule from './controllerModule'

export const container = createContainer()

container
    .register(controllerModule.scanResultControllerProvider)
    .register(controllerModule.locationPointControllerProvider)
    .register(interactorModule.storeScanResultProvider)
    .register(interactorModule.showRecentScanResultLocationsProvider)
    .register(repositoryModule.scanResultRepositoryProvider)
    .register(repositoryModule.locationPointRepositoryProvider)
    .register(repositoryModule.scanResultStoreProvider)


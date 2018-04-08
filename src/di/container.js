import { createContainer } from 'awilix'
import * as interactorModule from './interactorModule'
import * as repositoryModule from './repositoryModule'
import * as controllerModule from './controllerModule'

export const container = createContainer()

container
    .register(controllerModule.scanResultControllerProvider)
    .register(interactorModule.storeScanResultProvider)    
    .register(repositoryModule.scanResultRepositoryProvider)
    .register(repositoryModule.scanResultStoreProvider)


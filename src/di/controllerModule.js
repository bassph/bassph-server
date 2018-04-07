import { asClass, Lifetime } from 'awilix'

import { ScanResultController } from '../controllers/scanResultController'

export const scanResultControllerProvider = {
    scanResultController: asClass(ScanResultController).singleton()
}
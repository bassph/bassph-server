import { asClass } from 'awilix'
import { ScanResultController } from '../controllers/scanResultController'
import { LocationPointController } from '../controllers/locationPointController'

export const scanResultControllerProvider = {
    scanResultController: asClass(ScanResultController).singleton()
}

export const locationPointControllerProvider = {
    locationPointController: asClass(LocationPointController).singleton()
}
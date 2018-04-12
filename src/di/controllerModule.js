import { asClass } from 'awilix'
import scanResultController from '../controllers/scanResultController'
import locationPointController from '../controllers/locationPointController'
import dailyDataController from '../controllers/dailyDataController'

export const scanResultControllerProvider = {
    scanResultController: asClass(scanResultController).singleton()
}

export const locationPointControllerProvider = {
    locationPointController: asClass(locationPointController).singleton()
}

export const dailyDataControllerProvider = {
    dailyDataController: asClass(dailyDataController).singleton()
}

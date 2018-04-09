import { asClass } from 'awilix'
import { ScanResultController } from '../controllers/scanResultController'
import { LocationPointController } from '../controllers/locationPointController'
import { DailyDataController } from '../controllers/dailyDataController';

export const scanResultControllerProvider = {
    scanResultController: asClass(ScanResultController).singleton()
}

export const locationPointControllerProvider = {
    locationPointController: asClass(LocationPointController).singleton()
}

export const dailyDataControllerProvider = {
    dailyDataController: asClass(DailyDataController).singleton()
}
import { asClass } from 'awilix'
import ScanResultController from '../controllers/ScanResult'
import LocationPointController from '../controllers/LocationPoint'
import DailyDataController from '../controllers/DailyData';

export const scanResultControllerProvider = {
    scanResultController: asClass(ScanResultController).singleton()
}

export const locationPointControllerProvider = {
    locationPointController: asClass(LocationPointController).singleton()
}

export const dailyDataControllerProvider = {
    dailyDataController: asClass(DailyDataController).singleton()
}
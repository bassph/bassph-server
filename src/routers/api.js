import express from 'express'
import { container } from '../di/container'

const router = express.Router()
const ScanResultController = container.resolve('scanResultController')
const LocationPointController = container.resolve('locationPointController')
const DailyDataController = container.resolve('dailyDataController')

router.post('/scanresults', ScanResultController.post)
router.post('/v2/record', ScanResultController.post)
router.get('/scanresults', ScanResultController.get)
router.get('/locationpoints', LocationPointController.getRecentLocationPoints)
router.get('/dailyData', DailyDataController.get)

export default router;

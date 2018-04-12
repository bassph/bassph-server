import express from 'express'
import { container } from '../di/container'

const router = express.Router()
const ScanResultController = container.resolve('ScanResultController')
const LocationPointController = container.resolve('LocationPointController')
const DailyDataController = container.resolve('DailyDataController')

router.post('/scanresults', ScanResultController.post)
router.get('/scanresults', ScanResultController.get)
router.get('/locationpoints', LocationPointController.getRecentLocationPoints)
router.get('/dailyData', DailyDataController.get)

export default router;

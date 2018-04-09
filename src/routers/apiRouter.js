import express from 'express'
import { container } from '../di/container'
const router = express.Router()
const scanResultController = container.resolve('scanResultController')
const locationPointController = container.resolve('locationPointController')
const dailyDataController = container.resolve('dailyDataController')

router.post('/scanresults', scanResultController.post)
router.get('/scanresults', scanResultController.get)

router.get('/locationpoints', locationPointController.getRecentLocationPoints)

router.get('/dailyData', dailyDataController.get)

export default router;

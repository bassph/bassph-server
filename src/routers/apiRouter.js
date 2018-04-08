import express from 'express'
import { container } from '../di/container'
const router = express.Router()
const scanResultController = container.resolve('scanResultController')
const locationPointController = container.resolve('locationPointController')

router.post('/scanresults', scanResultController.post)
router.post('/scanresults?_format=csv', scanResultController.get)

router.get('/locationpoints', locationPointController.getRecentLocationPoints)

export default router;

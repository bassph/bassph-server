import express from 'express'
import { container } from '../di/container'
const router = express.Router()
const scanResultController = container.resolve('scanResultController')

router.post('/scanresults', scanResultController.post)
router.post('/scanresults?_format=csv', scanResultController.get)

export default router;

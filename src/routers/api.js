import express from 'express'
import { getScanResults } from '../controllers/ScanResult'

const router = express.Router()

router.get('/scan-result/', getScanResults)

export default router;

import express from 'express'
import scanResultController from '../controllers/scanResultController'

const router = express.Router()

router.post('/scanresults', scanResultController.post)
router.post('/scanresults?_format=csv', scanResultController.get)

export default router;

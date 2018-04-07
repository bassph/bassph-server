import autoBind from 'auto-bind'
import * as scanResultMapper from './mappers/scanResultMapper'

export class ScanResultController {
    constructor({ storeScanResult }) {
        this.storeScanResult = storeScanResult
        autoBind(this)        
    }

    post(req, res) {
        let scanResult = scanResultMapper.transform(req.body)
        scanResult.ipAddress = req.ip
        this.storeScanResult.execute(scanResult)
            .subscribe(scanResult => res.send(scanResult))
    }

    get(req, res) {

    }
}
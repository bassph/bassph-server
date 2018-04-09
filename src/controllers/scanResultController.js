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
            .subscribe(scanResult => {
                console.log("Inserted new scan result")
                res.send(scanResult)
            }, err => {
                console.log(err)
                res.send(err)
            })
    }

    get(req, res) {

    }
}
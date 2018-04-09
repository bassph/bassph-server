import autoBind from 'auto-bind'
import * as scanResultMapper from './mappers/scanResultMapper'

export class ScanResultController {
    constructor({ storeScanResult, showScanResults }) {
        this.storeScanResult = storeScanResult
        this.showScanResults = showScanResults
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
        this.showScanResults.execute({ afterEpoch: req.query.afterEpoch })
            .subscribe(scanResults => {
                if(req.query._format == 'csv') {
                    res.contentType('text/csv')
                    res.header('Content-Disposition', 'attachment; filename=scan_results.csv')
                    res.send(scanResultMapper.transformToCsv(scanResults))
                }
                else {
                    res.send(scanResults)
                }
            })
    }
}
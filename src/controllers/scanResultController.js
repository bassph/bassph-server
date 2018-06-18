import autoBind from 'auto-bind'
import * as ScanResultMapper from './mappers/ScanResult'
import * as csv from 'csv'

class ScanResultController {
	constructor({ storeScanResult, showScanResults }) {
		this.storeScanResult = storeScanResult
		this.showScanResults = showScanResults
		autoBind(this)
	}

	post(req, res) {
		let scanResult = ScanResultMapper.transform(req.body)
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
		res.contentType('text/csv')
		res.header('Content-Disposition', 'attachment; filename=scan_results.csv')
		const stream = this.showScanResults.executeAsStream({ afterEpoch: req.query.afterEpoch })
		ScanResultMapper.streamTransformToCsv(stream, res)
	}
}

export default ScanResultController

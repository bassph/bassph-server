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

		res.flushHeaders();

		const stream = this.showScanResults.executeAsStream({ afterEpoch: req.query.afterEpoch })
		stream
			.pipe(csv.transform(ScanResultMapper.transformToCsv))
			.pipe(csv.stringify({ header: true }))
			.pipe(res)

		//TODO
		// res.write('>>>>> HEADERS HERE');

		// res.write('\r\n')
		// let prevChunk = null;
		// const stream = this.showScanResults.executeAsStream({ afterEpoch: req.query.afterEpoch })
		// stream.on('error', err => {
		// 	console.error(err)
		// 	res.end('\r\n');
		// })
		// stream.on('data', doc => {
		// 	if (prevChunk) {
		// 		res.write(Object.values(prevChunk).join(','));
		// 		res.write('\r\n')
		// 	}
		// 	console.log("\n\n\n\n\n",doc,"\n\n\n\n\n")
		// 	prevChunk = doc;
		// })
		// stream.on('end', () => {
		// 	if (prevChunk) {
		// 		res.write(Object.values(prevChunk).join(','));
		// 	}
		// 	res.end('\r\n');
		// });
		/**this.showScanResults.execute({ afterEpoch: req.query.afterEpoch })
			.subscribe(scanResults => {
				if (req.query._format == 'csv') {
					res.contentType('text/csv')
					res.header('Content-Disposition', 'attachment; filename=scan_results.csv')
					res.send(ScanResultMapper.transformToCsv(scanResults))
				}
				else {
					res.send(scanResults)
				}
			})**/
	}
}

export default ScanResultController

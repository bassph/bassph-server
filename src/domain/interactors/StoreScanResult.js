import crypto from 'crypto'
/*
 * Store submitted scanResult
 * 
 * Mask last digits of IMEI before storing
 */
export class StoreScanResult {
    constructor({ scanResultRepository, cellTowerRepository }) {
        this.scanResultRepo = scanResultRepository
    }

    execute(scanResult) {
        scanResult.imei = maskImei(scanResult.imei)
        return this.scanResultRepo.save(scanResult)
    }
}

const maskImei = (imei) => {
    const hash = crypto.createHash('sha256');
    let maskedImei = ''
    const secret = 'abcdefg';
    try {
        if (imei >= 15) {
            let sub = imei.substring(0, 8)
            // hash last 6 digits
            let hashed = 
            crypto.createHmac('sha256', secret)
                   .update(imei.substring(8, 14))
                   .digest('hex')

            hash.end()
            maskedImei = sub + hashed + imei[14]
        }
        else {
            maskedImei = undefined
        }
    }
    catch (err) {
        console.log(err)
        maskedImei = undefined
    }

    return maskedImei
}
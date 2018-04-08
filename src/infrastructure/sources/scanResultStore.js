import Rx from 'rxjs/Rx'
import * as db from '../db'

export class ScanResultStore {
    save(scanResult) {
        let c = db.get().collection('scanresults')
        return Rx.Observable.from(c.insertOne(scanResult)).map(result => {
            console.log(result.ops[0])
            return result.ops[0]
        })
    }
}
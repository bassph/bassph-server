import Rx from 'rxjs/Rx'
import * as db from '../db'

export class ScanResultStore {
    save(scanResult) {
        let c = scanResultCollection()
        scanResult.dateAdded = Date.now()
        return Rx.Observable.from(c.insertOne(scanResult)).map(result => {
            return result.ops[0]
        })
    }

    findLatest(count) {
        let c = scanResultCollection()
        let queryObservable = 
            c.find({})
            .sort({"dateAdded": -1})
            .limit(count)
            .toArray()
        return Rx.Observable.from(queryObservable)
    }
}

const scanResultCollection = () => {
    return db.get().collection('scanresults')
}
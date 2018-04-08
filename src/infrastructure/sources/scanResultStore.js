import Rx from 'rxjs/Rx'
import * as db from '../db'

export class ScanResultStore {
    save(scanResult) {
        let c = scanResultsCollection()
        scanResult.dateAdded = Date.now()
        return Rx.Observable.from(c.insertOne(scanResult)).map(result => {
            console.log(result.ops[0])
            return result.ops[0]
        })
    }

    findLatest(count) {
        let c = scanResultsCollection()
        let queryObservable = 
            c.find({})
            .sort({"dateAdded": -1})
            .limit(count)
            .toArray()
        return Rx.Observable.from(queryObservable)
    }
}

const scanResultsCollection = () => {
    return db.get().collection('scanresults')
}
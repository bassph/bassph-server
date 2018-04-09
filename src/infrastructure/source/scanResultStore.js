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

    getAll({ afterEpoch }) {
        let c = scanResultCollection()
        let query = {}
        if(afterEpoch) {
            query.dateAdded = { $gte: parseInt(afterEpoch) }
            console.log(query)
        }
        return Rx.Observable.from(c.find(query).toArray())
    }

    findLatest(count) {
        let c = scanResultCollection()
        let queryObservable =
            c.find({})
                .sort({ "dateAdded": -1 })
                .limit(count)
                .toArray()
        return Rx.Observable.from(queryObservable)
    }

    findSampleDataFor(carrier) {
        let c = scanResultCollection()
        let todayStart = Date.now() - (Date.now() % (1000 * 60 * 60 * 24))
        let todayEnd = Date.now() - (Date.now() % (1000 * 60 * 60 * 24)) + 1000 * 60 * 60 * 24
        let match = {
            "cellTower.address": { $exists: true },
            dateAdded: {
                $gte: todayStart,
                $lt: todayEnd
            }
        }
        if(null != carrier) {
            match["connectivity.extraInfo"] = carrier
        }
        let query = [
            {
                $match: match
            },
            {
                $group: {
                    _id: "$cellTower.address",
                    operator: { $first: "$operator" },
                    bandwidth: { $first: "$bandwidth" },
                    dateAdded: { $first: "$dateAdded" }
                }
            },
            {
                $sample: { size: 10 }
            }
        ]

        return Rx.Observable.from(c.aggregate(query).toArray())
    }
}

const scanResultCollection = () => {
    return db.get().collection('scanresults')
}
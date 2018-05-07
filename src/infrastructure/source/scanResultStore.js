import Rx from 'rxjs/Rx'

export class ScanResultStore {
    constructor({persistenceManager}){
        this.persistenceManager = persistenceManager
    }

    save(scanResult) {
        const c = this._scanResultCollection()
        scanResult.dateAdded = Date.now()
        return Rx.Observable.from(c.insertOne(scanResult)).map(result => {
            return result.ops[0]
        })
    }

    getAll({ afterEpoch }) {
        const c = this._scanResultCollection()
        let query = {}
        if(afterEpoch) {
            query.dateAdded = { $gte: parseInt(afterEpoch) }
            console.log(query)
        }
        return Rx.Observable.from(c.find(query).toArray())
    }

    streamAll({ afterEpoch }) {
        const c = this._scanResultCollection()
        let query = {}
        if(afterEpoch) {
            query.dateAdded = { $gte: parseInt(afterEpoch) }
            console.log(query)
        }
        return c.find(query).stream()
    }

    findLatest(count) {
        const c = this._scanResultCollection()
        let queryObservable =
            c.find({})
                .sort({ "dateAdded": -1 })
                .limit(count)
                .toArray()
        return Rx.Observable.from(queryObservable)
    }

    findSampleDataFor(carrier) {
        const c = this._scanResultCollection()
        const todayStart = Date.now() - (Date.now() % (1000 * 60 * 60 * 24))
        const todayEnd = Date.now() - (Date.now() % (1000 * 60 * 60 * 24)) + 1000 * 60 * 60 * 24
        const match = {
            "cellTower.address": { $exists: true },
            dateAdded: {
                $gte: todayStart,
                $lt: todayEnd
            }
        }
        if(null != carrier) {
            match["connectivity.extraInfo"] = carrier
        }
        const query = [
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

    _scanResultCollection(){
        return this.persistenceManager.get().collection('scanresults')
    }
}
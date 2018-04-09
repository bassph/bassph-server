import Rx from 'rxjs/Rx'
import * as db from '../db'

export class CellTowerStore {
    upsert(cellTower) {
        let c = cellTowerCollection()
        let query = {
            cid: cellTower.cid,
            lac: cellTower.lac,
            mnc: cellTower.mnc,
            mcc: cellTower.mcc
        }
        return Rx.Observable.from(c.updateOne(query, { $set: cellTower }, { upsert: true }))
    }

    get(cellTower) {
        let c = cellTowerCollection()
        return Rx.Observable.from(c.findOne(cellTower))
    }
}

const cellTowerCollection = () => {
    return db.get().collection('celltowers')
}
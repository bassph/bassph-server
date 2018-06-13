import Rx from 'rxjs/Rx'

export class CellTowerStore {
    constructor({ persistenceManager }) {
        this.persistenceManager = persistenceManager
    }

    upsert(cellTower) {
        const c = this._cellTowerCollection()
        const query = {
            cid: cellTower.cid,
            lac: cellTower.lac,
            mnc: cellTower.mnc,
            mcc: cellTower.mcc
        }
        return Rx.Observable.from(c.updateOne(query, { $set: cellTower }, { upsert: true }))
    }

    get(cellTower) {
        const c = this._cellTowerCollection()
        return Rx.Observable.from(c.findOne(cellTower))
    }

    _cellTowerCollection() {
        return this.persistenceManager.get().collection('celltowers')
    }
}
import Rx from 'rxjs/Rx'

export class CellTowerRepository {
    constructor({ cellTowerStore, cellTowerLookupService }) {
        this.cellTowerStore = cellTowerStore
        this.cellTowerLookupService = cellTowerLookupService
    }

    save(cellTower) {
        return this.get(cellTower).flatMap(result => {
            const observable = this._upsertOrJustReturnObservable(result, cellTower)
            if (shouldLookup(result)) {
                return observable.do(_ =>  this._lookupAndUpdate(cellTower) )
            }
            return observable
        })
    }

    get(cellTower = { cid, lac, mcc, mnc }) {
        return this.cellTowerStore.get(cellTower)
    }

    _lookupAndUpdate(cellTower) {
        console.log('=====LOOKING UP=====')
        this.cellTowerLookupService.lookup(cellTower)
            .flatMap(result => {
                return this.cellTowerStore.upsert(Object.assign(cellTower, result))
            })
            .subscribe((_) => {}, (err) => {
                // TODO: Handle errors properly
                console.log(err)
            })
    }

    _upsertOrJustReturnObservable(result, cellTower) {
        let pendingCellTower = Object.assign(cellTower, { status: 'Pending' })
        if (null == result) {
            return this.cellTowerStore.upsert(pendingCellTower)
                .map(_ => pendingCellTower)
        }
        else {
            return Rx.Observable.of(result)
        }
    }
}

const shouldLookup = (result) => null == result || result.status == 'Pending'
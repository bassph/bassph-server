import axios from 'axios'
import Rx from 'rxjs/Rx'
import { lookupApiUrl, lookupToken } from '../../config/index'

export class CellTowerLookupService {
    lookup(cellTower) {
        let lookupObservable = axios.post(lookupApiUrl, createPayload(cellTower))
        return Rx.Observable.from(lookupObservable).map(response => response.data)
    }
}

const createPayload = (cellTower) => {
    return {
        token: lookupToken,
        mcc: cellTower.mcc,
        mnc: cellTower.mnc,
        cells: [
            {
                lac: cellTower.lac,
                cid: cellTower.cid
            }
        ],
        address: 1
    }
}
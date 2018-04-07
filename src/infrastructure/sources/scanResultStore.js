import Rx from 'rxjs/Rx'

export class ScanResultStore {
    save(scanResult) {
        // fake
        return Rx.Observable.from([scanResult])
    }
}
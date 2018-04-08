import autoBind from 'auto-bind'

export class LocationPointController {
    constructor({ showRecentScanResultLocations }) {
        this.showRecentScanResultLocations = showRecentScanResultLocations
        autoBind(this)        
    }

    getRecentLocationPoints(req, res) {
        this.showRecentScanResultLocations
            .execute()
            .subscribe(locationPoints => {
                console.log(locationPoints)
                res.send(locationPoints)
            })
    }
}
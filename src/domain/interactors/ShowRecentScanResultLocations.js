/*
 * Show recent locations where a 
 * scan result was posted
 */
export class ShowRecentScanResultLocations {
    constructor({ locationPointRepository }) {
        this.locationPointRepo = locationPointRepository
    }

    execute() {
        return this.locationPointRepo.getRecent()
    }
}
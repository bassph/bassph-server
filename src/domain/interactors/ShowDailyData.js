import { carrierMappings } from '../carrierMappings'
/*
 * Show some daily scan result data
 * for specified carrier
 */
export class ShowDailyData {
    constructor({ dailyDataRepository }) {
        this.dailyDataRepository = dailyDataRepository
    }

    execute(carrier) {
        return this.dailyDataRepository.fetch(carrierMappings[carrier])
    }
}


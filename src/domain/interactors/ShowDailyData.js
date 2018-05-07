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
        const provider = carrierMappings[carrier];
        const dailyData = provider
            ? this.dailyDataRepository.fetch(provider)
            : { message: "no data" }
        return dailyData
    }
}


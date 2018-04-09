import autoBind from 'auto-bind'

export class DailyDataController {
    constructor({ showDailyData }) {
        this.showDailyData = showDailyData
        autoBind(this)
    }

    get(req, res) {
        let carrier = req.query.carrier
        this.showDailyData.execute(carrier)
            .subscribe(dailyData => res.send(dailyData),
                err => res.send(err))
    }
}
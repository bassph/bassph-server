export class ShowScanResults {
    constructor ({ scanResultRepository }) {
        this.scanResultRepository = scanResultRepository
    }

    execute() {
        return this.scanResultRepository.getAll()
    }
}
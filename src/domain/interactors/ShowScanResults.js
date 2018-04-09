export class ShowScanResults {
    constructor ({ scanResultRepository }) {
        this.scanResultRepository = scanResultRepository
    }

    execute(request) {
        return this.scanResultRepository.getAll(request)
    }
}
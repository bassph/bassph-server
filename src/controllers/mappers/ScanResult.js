import { cleanObject } from '../../common/utils'
import { Parser } from 'json2csv'
import scanResultCsvFieldMapping from './scanResultCsvFieldMapping'

const _transform = object => [object].reduce((acc, cur, i) => {
    acc[i] = cur;
    let cleaned = cur;
    for (let key in acc[i]) {
        let newKey = key;
        if( newKey.startsWith("m") && key.charAt(1) == key.charAt(1).toUpperCase()) {
            newKey = key.charAt(1).toLowerCase() + key.substring(2)
        }
        cleaned[newKey] = acc[i][key]
        acc[i] = cleaned;
    }
    return acc;
}, {})[0];

export function transform(req) {
    const scanResult = {
        bandwidth: req.bandwidth,
        connectivity: _transform(req.connectivity),
        device: _transform(req.device),
        imei: req.imei,
        location: _transform(req.location),
        cellTower: _transform(req.networkInfo),
        operator: req.operator,
        mood: req.mood,
        signal: req.signal,
        signalBars: req.signalBars,
        version: req.version,
    }

    return cleanObject(scanResult)
}

export function transformToCsv(scanResults) {
    // TODO: Implement streaming
    try {
        const parser = new Parser(scanResultCsvFieldMapping);
        const csv = parser.parse(scanResults);
        return csv
    } catch (err) {
        console.error(err);
    }
}

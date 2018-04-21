import { cleanObject } from '../../common/utils'
import { Parser } from 'json2csv'
import scanResultCsvFieldMapping from './scanResultCsvFieldMapping'

export function transform(req) {
    const connectivity = (req.connectivity) ? {
        available: req.connectivity.available,
        detailedState: req.connectivity.detailedState,
        extraInfo: req.connectivity.extraInfo,
        failover: req.connectivity.failover,
        roaming: req.connectivity.roaming,
        state: req.connectivity.state,
        subType: req.connectivity.subType,
        subTypeName: req.connectivity.subTypeName,
        type: req.connectivity.type,
        typeName: req.connectivity.typeName
    } : null

    const device = (req.device) ? {
        manufacturer: req.device.manufacturer,
        model: req.device.model,
        name: req.device.name,
        release: req.device.release
    } : null

    const location = (req.location) ? {
        accuracy: req.location.mAccuracy,
        altitude: req.location.mAltitude,
        bearing: req.location.mBearing,
        distance: req.location.mDistance,
        elapsedRealtimeNanos: req.location.mElapsedRealtimeNanos,
        hasAccuracy: req.location.mHasAccuracy,
        hasAltitude: req.location.mHasAltitude,
        hasBearing: req.location.mHasBearing,
        hasSpeed: req.location.mHasSpeed,
        initialBearing: req.location.mInitialBearing,
        isFromMockProvider: req.location.mIsFromMockProvider,
        fieldsMask: req.location.mFieldsMask,
        lat1: req.location.mLat1,
        lat2: req.location.mLat2,
        latitude: req.location.mLatitude,
        lon1: req.location.mLon1,
        lon2: req.location.mLon2,
        longitude: req.location.mLongitude,
        provider: req.location.mProvider,
        speed: req.location.mSpeed,
        time: req.location.mTime
    } : null

    const cellTower = (req.networkInfo) ? {
        cid: req.networkInfo.cid,
        lac: req.networkInfo.lac,
        mcc: req.networkInfo.mcc,
        mnc: req.networkInfo.mnc,
    } : null

    const scanResult = {
        bandwidth: req.bandwidth,
        connectivity: connectivity,
        device: device,
        imei: req.imei,
        location: location,
        cellTower: cellTower,
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
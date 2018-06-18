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

export function transformToCsv(scanResult) {
    // // TODO: Implement streaming
    // try {
    //     const parser = new Parser(scanResultCsvFieldMapping);
    //     const csv = parser.parse(scanResults);
    //     return csv
    // } catch (err) {
    //     console.error(err);
    // }

    // TODO convert to yyyy-mm-dd hh:mm
    let date = scanResult.location.elapsedRealtimeNanos;

    return {
        TESTNUMBER: scanResult._id.toString(),
        BANDWIDTH: scanResult.bandwidth,
        OPERATOR: scanResult.operator,
        SIGNAL: scanResult.signal,
        SIGNALBARS: scanResult.signalBars,
        CONNECTIVITY_available: scanResult.connectivity.available,
        CONNECTIVITY_detailedState: scanResult.connectivity.detailedState,
        CONNECTIVITY_extraInfo: scanResult.connectivity.extraInfo ? scanResult.connectivity.extraInfo.replace(/&quot;/g,'') : 'none',
        CONNECTIVITY_failOver: scanResult.connectivity.failover,
        CONNECTIVITY_roaming: scanResult.connectivity.roaming,
        CONNECTIVITY_state: scanResult.connectivity.state,
        CONNECTIVITY_subType: scanResult.connectivity.subType,
        CONNECTIVITY_subTypeName: scanResult.connectivity.subTypeName,
        CONNECTIVITY_type: scanResult.connectivity.type,
        CONNECTIVITY_typeName: scanResult.connectivity.typeName,
        DEVICE_manufacturer: scanResult.device.manufacturer,
        DEVICE_model: scanResult.device.model,
        DEVICE_name: scanResult.device.name,
        DEVICE_release: scanResult.device.release,
        LOCATION_mAccuracy: scanResult.location.accuracy,
        LOCATION_mAltitude: scanResult.location.altitude,
        LOCATION_mDistance: scanResult.location.distance,
        LOCATION_mElapsedRealtimeNanos: scanResult.location.elapsedRealtimeNanos,
        LOCATION_mHasAccuracy: scanResult.location.hasAccuracy,
        LOCATION_mHasAltitude: scanResult.location.hasAltitude,
        LOCATION_mHasBearing: scanResult.location.hasBearing,
        LOCATION_mHasSpeed: scanResult.location.hasSpeed,
        LOCATION_mInitialBearing: scanResult.location.initialBearing,
        LOCATION_mIsFromMockProvider: scanResult.location.isFromMockProvider,
        LOCATION_mLat1: scanResult.location.lat1,
        LOCATION_mLat2: scanResult.location.lat2,
        LOCATION_mLatitude: scanResult.location.latitude,
        LOCATION_mLon1: scanResult.location.lon1,
        LOCATION_mLon2: scanResult.location.lon2,
        LOCATION_mLongitude: scanResult.location.longitude,
        LOCATION_mProvider: scanResult.location.provider,
        LOCATION_mSpeed: scanResult.location.speed,
        NETWORK_cid: scanResult.cellTower? scanResult.cellTower.cid : 'none',
        NETWORK_lac: scanResult.cellTower? scanResult.cellTower.lac : 'none',
        NETWORK_mcc: scanResult.cellTower? scanResult.cellTower.mcc : 'none',
        NETWORK_mnc: scanResult.cellTower? scanResult.cellTower.mnc : 'none',
        CELLTOWER_lat: scanResult.cellTower? scanResult.cellTower.lat : 'none',
        CELLTOWER_lon: scanResult.cellTower? scanResult.cellTower.lon : 'none',
        CELLTOWER_address: scanResult.cellTower? scanResult.cellTower.address : 'none',
        CELLTOWER_accuracy: scanResult.cellTower? scanResult.cellTower.address : 'none',
        CELLTOWER_lookupStatus: scanResult.cellTower? scanResult.cellTower.status: 'none',
        VERSION: scanResult.version,
        LOCATION_epochTime: date, //scanResult.location.elapsedRealtimeNanos,
        MOOD: scanResult.mood
    }
}
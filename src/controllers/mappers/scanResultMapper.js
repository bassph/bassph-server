import { cleanObject } from '../../common/utils'
import { Parser } from 'json2csv'
export const transform = (req) => {
    if ("connectivity" in req) {
        var connectivity = {
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
        }
    }
    if ("device" in req) {
        var device = {
            manufacturer: req.device.manufacturer,
            model: req.device.model,
            name: req.device.name,
            release: req.device.release
        }
    }
    if ("location" in req) {
        var location = {
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
        }
    }
    if ("networkInfo" in req) {
        var cellTower = {
            cid: req.networkInfo.cid,
            lac: req.networkInfo.lac,
            mcc: req.networkInfo.mcc,
            mnc: req.networkInfo.mnc,
        }
    }

    let scanResult = {
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

export const transformToCsv = (scanResults) => {
    // TODO: Implement streaming
    try {
        const parser = new Parser(scanResultCsvFieldMapping);
        const csv = parser.parse(scanResults);
        return csv
    } catch (err) {
        console.error(err);
    }
}

const scanResultCsvFieldMapping = {
    fields: [
        {
            label: 'TESTNUMBER',
            value: '_id',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'BANDWIDTH',
            value: 'bandwidth',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'OPERATOR',
            value: 'operator',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'SIGNAL',
            value: 'signal',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'SIGNALBARS',
            value: 'signalBars',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_available',
            value: 'connectivity.available',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_detailedState',
            value: 'connectivity.detailedState',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_extraInfo',
            value: 'connectivity.extraInfo',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_failOver',
            value: 'connectivity.failOver',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_roaming',
            value: 'connectivity.roaming',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_state',
            value: 'connectivity.state',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_subType',
            value: 'connectivity.subType',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_subTypeName',
            value: 'connectivity.subTypeName',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_type',
            value: 'connectivity.type',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CONNECTIVITY_typeName',
            value: 'connectivity.typeName',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'DEVICE_manufacturer',
            value: 'device.manufacturer',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'DEVICE_model',
            value: 'device.model',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'DEVICE_name',
            value: 'device.name',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'DEVICE_release',
            value: 'device.release',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mAccuracy',
            value: 'location.accuracy',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mAltitude',
            value: 'location.altitude',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mDistance',
            value: 'location.distance',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mElapsedRealtimeNanos',
            value: 'location.elapsedRealtimeNanos',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mHasAccuracy',
            value: 'location.hasAccuracy',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mHasAltitude',
            value: 'location.hasAltitude',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mHasBearing',
            value: 'location.hasBearing',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mHasSpeed',
            value: 'location.hasSpeed',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mInitialBearing',
            value: 'location.initialBearing',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mIsFromMockProvider',
            value: 'location.isFromMockProvider',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mLat1',
            value: 'location.lat1',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mLat2',
            value: 'location.lat2',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mLatitude',
            value: 'location.latitude',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mLon1',
            value: 'location.lon1',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mLon2',
            value: 'location.lon2',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mLongitude',
            value: 'location.longitude',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mProvider',
            value: 'location.provider',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_mSpeed',
            value: 'location.speed',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_cid',
            value: 'celltower.cid',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_lac',
            value: 'celltower.lac',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_mcc',
            value: 'celltower.mcc',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_mnc',
            value: 'celltower.mnc',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_lat',
            value: 'celltower.lat',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_lon',
            value: 'celltower.lon',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_address',
            value: 'celltower.address',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_accuracy',
            value: 'celltower.accuracy',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'CELLTOWER_lookupStatus',
            value: 'celltower.status',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'VERSION',
            value: 'version',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'LOCATION_epochTime',
            value: 'dateAdded',
            default: 'NULL',
            stringify: true
        },
        {
            label: 'MOOD',
            value: 'mood',
            default: 'NULL',
            stringify: true
        }
    ]
}

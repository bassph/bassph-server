module.exports = {
	"fields": [
		{
			"label": "TESTNUMBER",
			"value": "_id",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "BANDWIDTH",
			"value": "bandwidth",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "OPERATOR",
			"value": "operator",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "SIGNAL",
			"value": "signal",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "SIGNALBARS",
			"value": "signalBars",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_available",
			"value": "connectivity.available",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_detailedState",
			"value": "connectivity.detailedState",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_extraInfo",
			"value": "connectivity.extraInfo",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_failover",
			"value": "connectivity.failover",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_roaming",
			"value": "connectivity.roaming",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_state",
			"value": "connectivity.state",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_subType",
			"value": "connectivity.subType",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_subTypeName",
			"value": "connectivity.subTypeName",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_type",
			"value": "connectivity.type",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_typeName",
			"value": "connectivity.typeName",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CONNECTIVITY_ipAddress",
			"value": (row, field) => (row.ipAddress.substring(0, row.ipAddress.lastIndexOf(".")) + ".X"),
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "DEVICE_manufacturer",
			"value": "device.manufacturer",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "DEVICE_model",
			"value": "device.model",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "DEVICE_name",
			"value": "device.name",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "DEVICE_release",
			"value": "device.release",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mAccuracy",
			"value": "location.accuracy",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mAltitude",
			"value": "location.altitude",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mDistance",
			"value": "location.distance",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mElapsedRealtimeNanos",
			"value": "location.elapsedRealtimeNanos",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mHasAccuracy",
			"value": "location.hasAccuracy",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mHasAltitude",
			"value": "location.hasAltitude",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mHasBearing",
			"value": "location.hasBearing",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mHasSpeed",
			"value": "location.hasSpeed",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mInitialBearing",
			"value": "location.initialBearing",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mIsFromMockProvider",
			"value": "location.isFromMockProvider",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mLat1",
			"value": "location.lat1",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mLat2",
			"value": "location.lat2",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mLatitude",
			"value": (row, field) => row.location.latitude != null ? (row.location.latitude.substring(0, row.location.latitude.indexOf(".") + 6)) : "None",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mLon1",
			"value": "location.lon1",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mLon2",
			"value": "location.lon2",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mLongitude",
			"value": (row, field) => row.location.longitude != null ? (row.location.longitude.substring(0, row.location.longitude.indexOf(".") + 6)) : "None",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mProvider",
			"value": "location.provider",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_mSpeed",
			"value": "location.speed",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_cid",
			"value": "cellTower.cid",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_lac",
			"value": "cellTower.lac",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_mcc",
			"value": "cellTower.mcc",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_mnc",
			"value": "cellTower.mnc",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_lat",
			"value": "cellTower.lat",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_lon",
			"value": "cellTower.lon",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_address",
			"value": "cellTower.address",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_accuracy",
			"value": "cellTower.accuracy",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "CELLTOWER_lookupStatus",
			"value": "cellTower.status",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "VERSION",
			"value": "version",
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "LOCATION_epochTime",
			"value": (row, field) => (row.dateAdded / (60 * 60 * 1000)>>0) * (60 * 60 * 1000),
			"default": "NULL",
			"stringify": true
		},
		{
			"label": "MOOD",
			"value": "mood",
			"default": "NULL",
			"stringify": true
		}
	]
}

import { transform } from '../../../../src/controllers/mappers/ScanResult';

describe('Mappers: ScanResult', () => {
    describe('Transform no connectivity', () => {
        it('should return clean ScanResult object', () => {
            const request = {
                bandwidth: "bandwidth",
                //connectivity: connectivity,
                device: device,
                imei: "imei",
                networkInfo: networkInfo,
                operator: "operator",
                mood: "mood",
                signal: "signal",
                signalBars: "signalBars",
                version: "version",
            }
            const cleanData = transform(request)
            expect(cleanData.connectivity).to.be.null;
            expect(cleanData.cellTower).to.be.eql(networkInfo);
            expect(cleanData.device).to.be.eql(device);
            expect(cleanData.bandwidth).to.be.eql(request.bandwidth);
            expect(cleanData.imei).to.be.eql(request.imei);
            expect(cleanData.operator).to.be.eql(request.operator);
            expect(cleanData.signal).to.be.eql(request.signal);
            expect(cleanData.signalBars).to.be.eql(request.signalBars);
            expect(cleanData.version).to.be.eql(request.version);
        });
    });

    describe('Transform no device', () => {
        it('should return clean ScanResult object', () => {
            const request = {
                bandwidth: "bandwidth",
                connectivity: connectivity,
                //device: device,
                imei: "imei",
                networkInfo: networkInfo,
                operator: "operator",
                mood: "mood",
                signal: "signal",
                signalBars: "signalBars",
                version: "version",
            }
            const cleanData = transform(request)
            expect(cleanData.device).to.be.null;
            expect(cleanData.cellTower).to.be.eql(networkInfo);
            expect(cleanData.connectivity).to.be.eql(connectivity);
            expect(cleanData.bandwidth).to.be.eql(request.bandwidth);
            expect(cleanData.imei).to.be.eql(request.imei);
            expect(cleanData.operator).to.be.eql(request.operator);
            expect(cleanData.signal).to.be.eql(request.signal);
            expect(cleanData.signalBars).to.be.eql(request.signalBars);
            expect(cleanData.version).to.be.eql(request.version);
        });
    });

    describe('Transform no networkInfo', () => {
        it('should return clean ScanResult object', () => {
            const request = {
                bandwidth: "bandwidth",
                connectivity: connectivity,
                device: device,
                imei: "imei",
                //networkInfo: networkInfo,
                operator: "operator",
                mood: "mood",
                signal: "signal",
                signalBars: "signalBars",
                version: "version",
            }
            const cleanData = transform(request)
            expect(cleanData.cellTower).to.be.null;
            expect(cleanData.device).to.be.eql(device);
            expect(cleanData.connectivity).to.be.eql(connectivity);
            expect(cleanData.bandwidth).to.be.eql(request.bandwidth);
            expect(cleanData.imei).to.be.eql(request.imei);
            expect(cleanData.operator).to.be.eql(request.operator);
            expect(cleanData.signal).to.be.eql(request.signal);
            expect(cleanData.signalBars).to.be.eql(request.signalBars);
            expect(cleanData.version).to.be.eql(request.version);
        });
    });

    describe('Transform all data present', () => {
        it('should return clean ScanResult object', () => {
            const request = {
                bandwidth: "bandwidth",
                connectivity: connectivity,
                device: device,
                imei: "imei",
                networkInfo: networkInfo,
                operator: "operator",
                mood: "mood",
                signal: "signal",
                signalBars: "signalBars",
                version: "version",
            }
            const cleanData = transform(request)
            expect(cleanData.cellTower).to.be.eql(networkInfo);
            expect(cleanData.device).to.be.eql(device);
            expect(cleanData.connectivity).to.be.eql(connectivity);
            expect(cleanData.bandwidth).to.be.eql(request.bandwidth);
            expect(cleanData.imei).to.be.eql(request.imei);
            expect(cleanData.operator).to.be.eql(request.operator);
            expect(cleanData.signal).to.be.eql(request.signal);
            expect(cleanData.signalBars).to.be.eql(request.signalBars);
            expect(cleanData.version).to.be.eql(request.version);
        });
    });
})

const connectivity = {
    available: "available",
    detailedState: "detailedState",
    extraInfo: "extraInfo",
    failover: "failover",
    roaming: "roaming",
    state: "state",
    subType: "subType",
    subTypeName: "subTypeName",
    type: "type",
    typeName: "typeName"
}

const device = {
    manufacturer: "manufacturer",
    model: "model",
    name: "name",
    release: "release"
}

const location = {
    mAccuracy: "mAccuracy",
    mAltitude: "mAltitude",
    mBearing: "mBearing",
    mDistance: "mDistance",
    mElapsedRealtimeNanos: "mElapsedRealtimeNanos",
    mHasAccuracy: "mHasAccuracy",
    mHasAltitude: "mHasAltitude",
    mHasBearing: "mHasBearing",
    mHasSpeed: "mHasSpeed",
    mInitialBearing: "mInitialBearing",
    mIsFromMockProvider: "mIsFromMockProvider",
    mFieldsMask: "mFieldsMask",
    mLat1: "mLat1",
    mLat2: "mLat2",
    mLatitude: "mLatitude",
    mLon1: "mLon1",
    mLon2: "mLon2",
    mLongitude: "mLongitude",
    mProvider: "mProvider",
    mSpeed: "mSpeed",
    mTime: "mTime"
}

const networkInfo = {
    cid: "cid",
    lac: "lac",
    mcc: "mcc",
    mnc: "mnc",
}
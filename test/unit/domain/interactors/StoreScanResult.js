import StoreScanResult from '../../../../src/domain/interactors/StoreScanResult';
import { carrierMappings } from '../../../../src/domain/carrierMappings';
import crypto from 'crypto'

describe('Interactors: StoreScanResult', () => {
    describe('Store data with imei is null', () => {
        it('should store data without crashing', () => {
            let _response;
            const scanResultRepository = {
                save: scanResult => _response = scanResult
            };
            const scanResult = { imei: null }
const storeScanResult = new StoreScanResult({ scanResultRepository });
            const response = storeScanResult.execute(scanResult);
            expect(response.imei).to.be.undefined;
            expect(response.imei === null).to.be.false;
        });
    });

    describe('Store data with imei is empty', () => {
        it('should store data without crashing', () => {
            let _response;
            const scanResultRepository = {
                save: scanResult => _response = scanResult
            };
            const scanResult = { imei: '' }
            const storeScanResult = new StoreScanResult({ scanResultRepository });
            const response = storeScanResult.execute(scanResult);
            expect(response.imei).to.be.undefined;
            expect(response.imei === null).to.be.false;
        });
    });

    describe('Store data with imei length < 15', () => {
        it('should store data without crashing', () => {
            let _response;
            const scanResultRepository = {
                save: scanResult => _response = scanResult
            };

            const scanResult = { imei: '1111111111' }

            const storeScanResult = new StoreScanResult({ scanResultRepository });
            const response = storeScanResult.execute(scanResult);
            expect(response.imei).to.be.undefined;
            expect(response.imei === null).to.be.false;
        });
    });

    describe('Store data with imei length > 15 (numeric)', () => {
        it('should store data without crashing', () => {
            let _response;
            const scanResultRepository = {
                save: scanResult => _response = scanResult
            };
            const scanResult = { imei: '11111111111111111' }

            const storeScanResult = new StoreScanResult({ scanResultRepository });
            const response = storeScanResult.execute(scanResult);

            const hashed = crypto.createHmac('sha256', 'abcdefg').update('111111').digest('hex')
            const expectedImei = `11111111${hashed}1`
            expect(response.imei).to.be.eql(expectedImei);
        });
    });

    describe('Store data with imei length > 15 (alpha)', () => {
        it('should store data without crashing', () => {
            let _response;
            const scanResultRepository = {
                save: scanResult => _response = scanResult
            };
            const scanResult = { imei: 'aaaaaaaaaaaaaaa' }

            const storeScanResult = new StoreScanResult({ scanResultRepository });
            const response = storeScanResult.execute(scanResult);

            const hashed = crypto.createHmac('sha256', 'abcdefg').update('aaaaaa').digest('hex')
            const expectedImei = `aaaaaaaa${hashed}a`
            expect(response.imei).to.be.eql(expectedImei);
        });
    });

    describe('Store data with imei length is 15', () => {
        it('should store data without crashing', () => {
            let _response;
            const scanResultRepository = {
                save: scanResult => _response = scanResult
            };
            const scanResult = { imei: '222222222222222' }
            const storeScanResult = new StoreScanResult({ scanResultRepository });
            const response = storeScanResult.execute(scanResult);

            const hashed = crypto.createHmac('sha256', 'abcdefg').update('222222').digest('hex')
            const expectedImei = `22222222${hashed}2`
            expect(response.imei).to.be.eql(expectedImei);
        });
    });
});
import ShowDailyData from '../../../../src/domain/interactors/ShowDailyData';
import { carrierMappings } from '../../../../src/domain/carrierMappings';

describe('Interactors: ShowDailyData', () => {
    describe('Get Daily Data Based of Smart', () => {
        it('should retun data Smart data', () => {
            const dailyDataRepository = {
                fetch: td.function(carrier),
            };

            const carrier = 'smart'

            const expectedResponse = {
                id: 1,
                payload: `to be mapped with some returned model, not sure yet what mongo's data struct is`,
            };

            td.when(dailyDataRepository.fetch(carrierMappings[carrier])).thenReturn(expectedResponse);
            const showDailyData = new ShowDailyData({ dailyDataRepository });
            const response = showDailyData.execute(carrier);
            expect(response).to.be.eql(expectedResponse);
        });
    });

    describe('Get Daily Data Based of Globe', () => {
        it('should retun data Globe data', () => {
            const dailyDataRepository = {
                fetch: td.function(carrier),
            };

            const carrier = 'globe'

            const expectedResponse = {
                id: 1,
                payload: `to be mapped with some returned model, not sure yet what mongo's data struct is`,
            };

            td.when(dailyDataRepository.fetch(carrierMappings[carrier])).thenReturn(expectedResponse);

            const showDailyData = new ShowDailyData({ dailyDataRepository });
            const response = showDailyData.execute(carrier);
            expect(response).to.be.eql(expectedResponse);

        });
    });

    describe('Get Daily Data Based of unknown Provider', () => {
        it('should retun No Data', () => {
            const dailyDataRepository = {
                fetch: td.function(carrier),
            };

            const carrier = 'batman'

            const expectedResponse = { message: "no data" };

            const showDailyData = new ShowDailyData({ dailyDataRepository });
            const response = showDailyData.execute(carrier);
            expect(response).to.be.eql(expectedResponse);

        });
    });
});
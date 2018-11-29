import assert from 'assert';
import Integrator from './Integrator';

describe('Integrator', () => {
    describe('#Update', () => {
        it('it should update properties', () => {
            const page = 'pdp';
            const config = {};
            const jsonObject = {
                pageName: '',
                pageTitle: '',
                things: {
                    thing1: 'foo',
                    thing2: 'bar',
                },
            };
            const integrator = new Integrator(page, config);
            assert.equal(integrator.retrieveValueForKey('thing1', jsonObject), 'foo');
        });
    });
});

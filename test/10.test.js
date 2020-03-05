const censored = require('../src/10');

test('Symmetrical:', () => {
    expect(censored('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toEqual('#### ingin makan #### goreng.');
});

const length = require('../src/01');

test('length is equal:', () => {
    expect(length('Mozilla')).toEqual(7);
});

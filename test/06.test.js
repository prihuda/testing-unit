const repeatString = require('../src/06');

test('String repeat:', () => {
    expect(repeatString('Makan! ', 3)).toBe('Makan! Makan! Makan! ');
});

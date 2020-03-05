const mebiToKibi = require('../src/03');

test('mebiToKibi is equal:', () => {
    expect(mebiToKibi(1)).toBe(1024);
});

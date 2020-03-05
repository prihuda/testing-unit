const repeatLetter = require('../src/08');

test('Letter repeat:', () => {
    expect(repeatLetter([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1]);
});

const repeatLetter = require('../src/07');

test('Letter repeat:', () => {
    expect(repeatLetter('Hello World! ',2)).toBe('HHeelllloo WWoorrlldd!! ');
});

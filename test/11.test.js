const User = require('../src/11');

test('Symmetrical:', () => {
    expect(User.findByUsername('johndoe')).toEqual({ id: 3, username: 'johndoe', name: 'John Doe' });
});

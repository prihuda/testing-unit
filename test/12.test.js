const Item = require('../src/12');

test('Symmetrical:', () => {
    expect(Item.findByID(3).isOnSale()).toBe(false);
});

function addItems(cart, itemsToAdd) {
    const updatedCart = [...cart, ...itemsToAdd];
    return updatedCart;
  }

module.exports = { addItems };

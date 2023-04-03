// make sure to check readme for information about taxes
function addTotal(cart, state) {
  const taxRates = {
    NY: 0.09,
    NJ: 0.07,
    CT: 0.12,
  };

  const taxRate = taxRates[state] || 0; // default to 0% tax if state not found

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const totalWithTax = total * (1 + taxRate);

  return Number(totalWithTax.toFixed(2));
}

module.exports = { addTotal };

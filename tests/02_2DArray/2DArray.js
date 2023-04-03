function twoDArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  const flatArr = arr.flat();
  return flatArr.reduce((acc, val) => acc + val, 0);
}

module.exports = { twoDArray };

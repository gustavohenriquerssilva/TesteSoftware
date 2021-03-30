function sum(a, b) {
  if (a == null || b== null) {
    throw new TypeError("Parâmetro inválido. O valor é nulo.");
  }

  return a + b;
}

module.exports = sum;
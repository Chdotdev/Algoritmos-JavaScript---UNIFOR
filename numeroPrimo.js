function ehPrimo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const numero = 7;
console.log(ehPrimo(numero) ? `${numero} é primo.` : `${numero} não é primo.`);

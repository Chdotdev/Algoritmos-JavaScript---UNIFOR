function mdc(a, b) {
  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

const a = 48;
const b = 18;
console.log(`MDC de ${a} e ${b}: ${mdc(a, b)}`);

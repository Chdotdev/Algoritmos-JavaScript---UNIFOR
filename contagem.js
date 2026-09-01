function contarNoIntervalo(valores) {
  const n = valores.length;
  const primeiro = valores[0];
  let contador = 0;

  for (let i = 0; i < n; i++) {
    if (valores[i] >= primeiro && valores[i] <= n) {
      contador++;
    }
  }

  return contador;
}

const valores = [3, 1, 5, 2, 8, 4, 6];
console.log(`Quantidade de valores entre ${valores[0]} e ${valores.length}: ${contarNoIntervalo(valores)}`);

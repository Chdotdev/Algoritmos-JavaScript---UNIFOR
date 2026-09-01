function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivo = array[Math.floor(array.length / 2)];
  const menores = array.filter((valor) => valor < pivo);
  const iguais = array.filter((valor) => valor === pivo);
  const maiores = array.filter((valor) => valor > pivo);

  return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
}

const numeros = [5, 3, 8, 1, 9, 2, 7];
console.log(`Array ordenado: ${quicksort(numeros)}`);

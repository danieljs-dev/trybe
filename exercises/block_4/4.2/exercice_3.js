// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// Calculo média: adicionar todos os elementos e depois dividir pelo número de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalSum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  totalSum += numbers[i];
}

let average = totalSum / numbers.length;

console.log(average);



// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. 
// Exemplo: 4! = 4 3 2 * 1 = 24

let factorial = (n) => {
  let factorial = 1;
  for (let index = 1; index <= n; index += 1) {
    factorial *= index;
  }
  return factorial;
}

console.log(factorial(5));

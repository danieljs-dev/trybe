// Crie uma função que receba uma frase e retorne qual a maior palavra

let longestWord = (str) => {
  let string = str.split(' ');
  let longest = 0;
  let word = null;
  
  for (let index = 0; index <= string.length - 1; index += 1) {
    if (longest < string[index].length) {
      longest = string[index].length;
      word = string[index];
    }
  }
  return word;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

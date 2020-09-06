// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

/*
function verificaPalindromo() {
  let palavra = arara;
  let palindromo = reverse.palavra;
  return palindromo;
}

console.log(verificaPalindromo);
*/


let palavra = "Daniel";
function verificaPalindromo(palavra) {

  
  for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
  }

  for (let j = palavra.length - 1; j >= 0; j--) {
    console.log(palavra[j]);
  }

  if (palavra[i] == palavra[j]) {
    console.log("True");
  } else {
    console.log("False");
  }

return palavra;

}





let palavra = "Daniel";
for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}


let palavra = "Daniel";
for (let j = palavra.length - 1; j >= 0; j--) {
  console.log(palavra[j]);
}






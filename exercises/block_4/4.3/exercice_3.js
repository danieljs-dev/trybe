let n = 5;
let asterisco = '*';
let linha = '';
let espacos = ' ';
let posicaoEntrada = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columIndex = 0; columIndex <= n; columIndex += 1) {
    if (columIndex < posicaoEntrada) {
      linha += ' ';
    } else {
      linha += asterisco;
    }
  }
  console.log(linha);
  linha = '';
  posicaoEntrada--;
}





let custo = 40,
    venda = 50;

if (custo !== 0 && venda !== 0) {
  let lucro = (venda - custo) * 0.8 * 1000;
  console.log('O lucro foi de: ' + lucro);
} else {
  console.log('FATAL ERROR! Os valores de entrada não podem ser menor que 0')
}

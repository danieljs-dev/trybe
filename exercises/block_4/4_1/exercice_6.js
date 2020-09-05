let chessPiece = 'PEAO';

switch (chessPiece.toLowerCase()) {
  case 'peao':
    console.log('O ' + chessPiece + ' se desloca para frente, uma casa de cada vez.')
    break;
  case 'torre':
    console.log('A ' + chessPiece + ' se desloca na vertical ou horizontal.')
    break;
  case 'bispo':
    console.log('O ' + chessPiece + ' se desloca na vertical.')
    break;
  case 'cavalo':
    console.log('O ' + chessPiece + ' se desloca em forma de L.')
    break;
  case 'dama':
    console.log('A ' + chessPiece + ' se desloca por todas as direções.')
    break;
  case 'rei':
    console.log('O ' + chessPiece + ' se desloca na vertical ou horizontal, uma casa de cada vez.')
    break;
  default:
    console.log('Peça inválida')
}

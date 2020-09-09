const sum = require('./exercice_1');
const { TestScheduler } = require('jest');

test('Testa se é uma função', () => {
  expect(typeof sum).toBe('function');
});

describe('retorna a soma do parâmetro a com o b', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow();
  });

  it('Teste se a função sum lança um erro "parameters must be numbers" quando os parametros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  });
});

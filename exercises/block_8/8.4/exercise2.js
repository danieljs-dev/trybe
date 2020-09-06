// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const assert = require('assert');

const sum = (...sumNumbers) => sumNumbers.reduce((acumulator, current) => acumulator + current, 0); 

assert.equal(sum(), 0);
assert.equal(sum(1), 1);
assert.equal(sum(1, 2), 3);
assert.equal(sum(1, 2, 3), 6);
assert.equal(sum(1, 2, 3, 4), 10);
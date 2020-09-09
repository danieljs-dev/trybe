const objctJson = require('./exercice_5');

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  it('Compare se dois objetos são iguais', () => {
    expect(objctJson.obj1).toEqual(objctJson.obj2);
  });

  it('Compare se dois objetos são diferentes', () => {
    expect(objctJson.obj2).not.toEqual(objctJson.obj3);
  });
});

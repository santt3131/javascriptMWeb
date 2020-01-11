import MiArbol from './kata11';
describe('Kata #9: sumatorio', () => {
  var planta1 = new MiArbol('peral', 'pera');

  function probandoError() {
    planta1.definirFruta(12);
  }
  test('1.Al crear un arbol e invocar posteriormente definirFruta con el valor 12 el métodolanza un error y mantiene su valor previo', () => {
    expect(probandoError).toThrowError('Haz insertado un valor que no es string');
  });
});

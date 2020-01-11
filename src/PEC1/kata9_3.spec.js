import Arbol from './kata9_3';
describe('Kata #9_3: sumatorio', () => {
  var propiedadesArray = ['obtenerEspecie', 'obtenerFruta'];
  let ex1 = new Arbol('peral', 'pera');

  test('1. El objeto devuelto incluye dos propiedades: obtenerEspecie y obtenerFruta', () => {
    expect(Object.getOwnPropertyNames(ex1.plantarArbol())).toEqual(
      expect.arrayContaining(propiedadesArray)
    );
  });
  test('2. Al invocar el método obtenerEspecie nos devuelve el valor peral', () => {
    expect(ex1.plantarArbol().obtenerEspecie()).toBe('peral');
  });
  test('3. Al invocar el método obtenerFruta nos devuelve el valor pera', () => {
    expect(ex1.plantarArbol().obtenerFruta()).toBe('pera');
  });
});

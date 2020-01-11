import plantarArbol from './kata9_3';
describe('Kata #9: sumatorio', () => {
  var propiedadesArray = ['obtenerEspecie', 'obtenerFruta'];
  test('1. El objeto devuelto incluye dos propiedades: obtenerEspecie y obtenerFruta', () => {
    expect(Object.getOwnPropertyNames(plantarArbol('peral', 'pera'))).toEqual(
      expect.arrayContaining(propiedadesArray)
    );
  });
  test('2. Al invocar el método obtenerEspecie nos devuelve el valor peral', () => {
    expect(plantarArbol('peral', 'pera').obtenerEspecie()).toBe('peral');
  });
  test('3. Al invocar el método obtenerFruta nos devuelve el valor pera', () => {
    expect(plantarArbol('peral', 'pera').obtenerFruta()).toBe('pera');
  });
});

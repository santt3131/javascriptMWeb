import plantarArbol from './kata9_2';
describe('Kata #9: sumatorio', () => {
  test('1. El objeto devuelto incluye tres propiedades: especie', () => {
    expect(Object.getOwnPropertyNames(plantarArbol('manzano', 'manzana')).includes('especie')).toBe(
      true
    );
  });
  test('1. El objeto devuelto incluye tres propiedades: fruta', () => {
    expect(Object.getOwnPropertyNames(plantarArbol('manzano', 'manzana')).includes('fruta')).toBe(
      true
    );
  });
  test('1. El objeto devuelto incluye tres propiedades: obtenerFruta', () => {
    expect(
      Object.getOwnPropertyNames(plantarArbol('manzano', 'manzana')).includes('obtenerFruta')
    ).toBe(true);
  });
  test('2. Al invocar el método obtenerFruta nos devuelve el valor pera', () => {
    expect(plantarArbol('peral', 'pera').obtenerFruta()).toBe('pera');
  });
  //o
  var obtenerFrutaMock = plantarArbol('peral', 'pera').obtenerFruta;
  test('2. Al invocar el método obtenerFruta nos devuelve el valor pera', () => {
    expect(obtenerFrutaMock.apply(plantarArbol('peral', 'pera'))).toBe('pera');
  });
});

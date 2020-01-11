import Arbol from './kata9_2';
describe('Kata #9: sumatorio', () => {
  let ex1 = new Arbol('manzano', 'manzana');
  let ex2 = new Arbol('peral', 'pera');
  test('1. El objeto devuelto incluye tres propiedades: especie', () => {
    expect(Object.getOwnPropertyNames(ex1.plantarArbol()).includes('especie')).toBe(true);
  });
  test('1. El objeto devuelto incluye tres propiedades: fruta', () => {
    expect(Object.getOwnPropertyNames(ex1.plantarArbol()).includes('fruta')).toBe(true);
  });
  test('1. El objeto devuelto incluye tres propiedades: obtenerFruta', () => {
    expect(Object.getOwnPropertyNames(ex1.plantarArbol()).includes('obtenerFruta')).toBe(true);
  });
  test('2. Al invocar el método obtenerFruta nos devuelve el valor pera', () => {
    expect(ex2.plantarArbol().obtenerFruta()).toBe('pera');
  });
});

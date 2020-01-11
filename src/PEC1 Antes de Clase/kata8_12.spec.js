import obtenerFruta from './kata8_2';
import objectoArbol from './kata8_1';
describe('Kata #8.2: Objeto Arbol', () => {
  test('1-El elemento recibido tiene la propiedad fruta', () => {
    expect(objectoArbol.hasOwnProperty('fruta')).toBe(true);
  });

  test('2-Si el elemento contiene la propiedad fruta retorna su valor', () => {
    expect(obtenerFruta(objectoArbol)).toBe('manzana');
  });
  var ObjectoPatata = {
    categoria: 'top'
  };
  test('2-Si no el elemento contiene la propiedad fruta retorna su valor', () => {
    expect(obtenerFruta(ObjectoPatata)).toBe('No fruta');
  });
});

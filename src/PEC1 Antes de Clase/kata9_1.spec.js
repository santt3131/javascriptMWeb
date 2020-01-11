import plantarArbol from './kata9_1';
describe('Kata #9: sumatorio', () => {
  test('1. Number - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(plantarArbol(8, 9)).toBeNull();
  });
  test('1. Number/string -  En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(plantarArbol(8, 'manzana')).toBeNull();
  });
  test('1.string/ number - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(plantarArbol('manzana', 9)).toBeNull();
  });
  var pruebaObjeto = {
    vehiculo: 'coche'
  };
  test('1. Objetos - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(plantarArbol(pruebaObjeto, pruebaObjeto)).toBeNull();
  });
  test('1. Boolean - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(plantarArbol(true, false)).toBeNull();
  });
  var miperal = {
    especie: 'peral',
    fruta: 'pera'
  };
  test('Al invocar la función con los parámetros peral y pera devuelve el objeto: ', () => {
    expect(plantarArbol('peral', 'pera')).toEqual(miperal);
  });
});

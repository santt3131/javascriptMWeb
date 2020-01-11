import Arbol from './kata9_1';
describe('Kata #9: sumatorio', () => {
  let ex1 = new Arbol(9, 9);
  let ex1_2 = new Arbol(8, 'manzana');
  let ex1_3 = new Arbol('manzana', 9);
  var pruebaObjeto = {
    vehiculo: 'coche'
  };
  let ex1_4 = new Arbol(pruebaObjeto, pruebaObjeto);
  let ex1_5 = new Arbol(true, false);
  var miperal = {
    especie: 'peral',
    fruta: 'pera'
  };
  let ex1_6 = new Arbol('peral', 'pera');

  test('1. Number - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(ex1.plantarArbol()).toBeNull();
  });
  test('1. Number/string -  En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(ex1_2.plantarArbol()).toBeNull();
  });
  test('1.string/ number - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(ex1_3.plantarArbol()).toBeNull();
  });
  test('1. Objetos - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(ex1_4.plantarArbol()).toBeNull();
  });
  test('1. Boolean - En caso de no recibir dos parámetros string del tipo string devolverá null ', () => {
    expect(ex1_5.plantarArbol()).toBeNull();
  });
  test('Al invocar la función con los parámetros peral y pera devuelve el objeto: ', () => {
    expect(ex1_6.plantarArbol()).toEqual(miperal);
  });
});

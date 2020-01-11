import Arbol from './kata10';
describe('Kata #10: sumatorio', () => {
  let ex1 = new Arbol();
  test('1. Arbol tiene el método obtenerEspecie que devuelve un string que tiene el método presentarArbol', () => {
    expect(ex1.plantarArbol().obtenerEspecie()).toBe('Este arbol es un manzano');
  });

  test('2. Al ejecutar presentarArbol se presentar por consola “"Este árbol es un ${nuestro_arbol}”', () => {
    expect('peral'.presentarArbol()).toBe('Este arbol es un peral');
  });

  test('3. Al ejecutar presentarArbol con un parámetro de tipo string se presentar por consola “"Este árbol es un ${nuestro_arbol} y da ${nuestra_fruta}”,', () => {
    expect('peral'.presentarArbol('pera')).toBe('Este arbol es un(a) peral y da un pera');
  });
});

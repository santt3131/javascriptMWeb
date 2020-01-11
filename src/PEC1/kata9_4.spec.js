import Arbol from './kata9_4';
describe('Kata #9: sumatorio', () => {
  var propiedadesArray = ['obtenerEspecie', 'definirEspecie', 'obtenerFruta', 'definirFruta'];
  var objetoRecibido = Object.getOwnPropertyNames(Arbol.prototype);
  test('1. El objeto devuelto incluye cuatro propiedades/funciones: obtenerEspecie, definirEspecie , obtenerFruta y definirFruta', () => {
    expect(objetoRecibido).toEqual(expect.arrayContaining(propiedadesArray));
  });

  let ex2 = new Arbol('peral', 'pera');
  ex2.definirFruta(12);

  test('2.Al crear un arbol e invocar posteriormente definirFruta con el valor 12 el objeto arbol mantiene su valor previo', () => {
    expect(ex2.fruta).toBe('pera');
  });

  let ex3 = new Arbol('peral', 'pera');
  ex3.definirFruta('manzana');

  test('3. Al crear un arbol e invocar posteriormente definirFruta con el valor manzana el objeto arbol tiene manzana como valor la propiedad fruta', () => {
    expect(ex3.fruta).toBe('manzana');
  });

  let ex4 = new Arbol('peral', 'pera');
  ex4.definirEspecie(10);
  test('4.Al crear un arbol e invocar posteriormente definirEspecie con el valor 10 el objeto arbol mantiene su valor previo', () => {
    expect(ex4.especie).toBe('peral');
  });

  let ex4_2 = new Arbol('peral', 'pera');
  ex4_2.definirEspecie('manzano');
  test('4.2 Al crear un arbol e invocar posteriormente definirEspecie con el valor manzano el objeto arbol tiene manzano como valor la propiedad especie', () => {
    expect(ex4_2.especie).toBe('manzano');
  });
});

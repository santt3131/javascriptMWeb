import plantarArbol from './kata9_4';
describe('Kata #9: sumatorio', () => {
  var propiedadesArray = ['obtenerEspecie', 'definirEspecie', 'obtenerFruta', 'definirFruta'];

  test('1. El objeto devuelto incluye cuatro propiedades: obtenerEspecie, definirEspecie , obtenerFruta y definirFruta', () => {
    expect(Object.getOwnPropertyNames(plantarArbol('peral', 'pera'))).toEqual(
      expect.arrayContaining(propiedadesArray)
    );
  });

  var planta2 = plantarArbol('peral', 'pera');
  planta2.definirFruta(12);
  test('2.Al crear un arbol e invocar posteriormente definirFruta con el valor 12 el objeto arbol mantiene su valor previo', () => {
    expect(planta2.frutaPropiedad).toBe('pera');
  });

  var planta3 = plantarArbol('peral', 'pera');
  planta3.definirFruta('manzana');
  test('3. Al crear un arbol e invocar posteriormente definirFruta con el valor manzana el objeto arbol tiene manzana como valor la propiedad fruta', () => {
    expect(planta3.frutaPropiedad).toBe('manzana');
  });

  var planta4 = plantarArbol('peral', 'pera');
  planta4.definirEspecie(10);
  test('4.Al crear un arbol e invocar posteriormente definirEspecie con el valor 10 el objeto arbol mantiene su valor previo', () => {
    expect(planta4.especiePropiedad).toBe('peral');
  });

  var planta4_2 = plantarArbol('peral', 'pera');
  planta4_2.definirEspecie('manzano');
  test('4. Al crear un arbol e invocar posteriormente definirEspecie con el valor manzano el objeto arbol tiene manzano como valor la propiedad especie', () => {
    expect(planta4_2.especiePropiedad).toBe('manzano');
  });
});

import MiArbol from './kata8_1';
describe('Kata #8.1: Objeto Arbol', () => {
  test('Debe tener una propiedad especie y una fruta', () => {
    const expectPropiedades = ['especie', 'fruta'];
    let ex1 = new MiArbol('peral', 'pera');
    expect(Object.getOwnPropertyNames(ex1)).toEqual(expect.arrayContaining(expectPropiedades));
  });

  let ex2 = new MiArbol('manzano', 'manzana');
  test('El valor de la propiedad especie debe ser manzano', () => {
    expect(ex2.especie).toBe('manzano');
  });

  let ex3 = new MiArbol('manzano', 'manzana');
  test('El valor de la propiedad fruta debe ser manzana ', () => {
    expect(ex3.fruta).toBe('manzana');
  });

  test('Debe existir un método obtenerFruta', () => {
    expect(Object.getOwnPropertyNames(MiArbol.prototype)).toContainEqual('obtenerFruta');
  });

  let ex5 = new MiArbol('manzano', 'manzana');
  test('El resultado de invocar el método obtenerFruta debe ser manzana', () => {
    expect(ex5.obtenerFruta()).toBe('manzana');
  });
});

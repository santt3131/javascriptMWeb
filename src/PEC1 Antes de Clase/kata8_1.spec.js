import objectoArbol from './kata8_1';
describe('Kata #8.1: Objeto Arbol', () => {
  test('Debe tener una propiedad especie y una fruta', () => {
    const expectPropiedades = ['especie', 'fruta'];
    expect(Object.getOwnPropertyNames(objectoArbol)).toEqual(
      expect.arrayContaining(expectPropiedades)
    );
  });
  test('El valor de la propiedad especie debe ser manzano', () => {
    expect(objectoArbol.especie).toBe('manzano');
  });
  test('El valor de la propiedad fruta debe ser manzana ', () => {
    expect(objectoArbol.fruta).toBe('manzana');
  });
  test('Debe existir un método obtenerFruta', () => {
    expect(Object.getOwnPropertyNames(objectoArbol)).toContainEqual('obtenerFruta');
  });
  test('El resultado de invocar el método obtenerFruta debe ser manzana', () => {
    expect(objectoArbol.obtenerFruta()).toBe('manzana');
  });
});

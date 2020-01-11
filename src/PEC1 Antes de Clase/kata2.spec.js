import suma_de_elementos_positivos from './kata2';
describe('Kata #2: Suma de elementos positivos', () => {
  test('de [] deberia ser 0', () => {
    expect(suma_de_elementos_positivos([])).toBe(0);
  });
  test('de [1,2,3,4,5] deberia ser 15', () => {
    expect(suma_de_elementos_positivos([1, 2, 3, 4, 5])).toBe(15);
  });
  test('de [1,-2,3,4,5] deberia ser 13', () => {
    expect(suma_de_elementos_positivos([1, -2, 3, 4, 5])).toBe(13);
  });
  test('de [-1,2,3,4,-5] deberia ser 9', () => {
    expect(suma_de_elementos_positivos([-1, 2, 3, 4, -5])).toBe(9);
  });
  test('de [-1,-2,-3,-4,-5] deberia ser 0', () => {
    expect(suma_de_elementos_positivos([-1, -2, -3, -4, -5])).toBe(0);
  });
});

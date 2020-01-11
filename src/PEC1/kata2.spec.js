import SumaElementos from './kata2';
describe('Kata #2: Suma de elementos positivos', () => {
  let ex = new SumaElementos([]);
  let ex2 = new SumaElementos([1, 2, 3, 4, 5]);
  let ex3 = new SumaElementos([1, -2, 3, 4, 5]);
  let ex4 = new SumaElementos([-1, 2, 3, 4, -5]);
  let ex5 = new SumaElementos([-1, -2, -3, -4, -5]);

  test('de [] deberia ser 0', () => {
    expect(ex.suma_de_elementos_positivos()).toBe(0);
  });
  test('de [1,2,3,4,5] deberia ser 15', () => {
    expect(ex2.suma_de_elementos_positivos()).toBe(15);
  });
  test('de [1,-2,3,4,5] deberia ser 13', () => {
    expect(ex3.suma_de_elementos_positivos()).toBe(13);
  });
  test('de [-1,2,3,4,-5] deberia ser 9', () => {
    expect(ex4.suma_de_elementos_positivos()).toBe(9);
  });
  test('de [-1,-2,-3,-4,-5] deberia ser 0', () => {
    expect(ex5.suma_de_elementos_positivos()).toBe(0);
  });
});

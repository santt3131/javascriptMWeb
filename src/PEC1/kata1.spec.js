import ParImpar from './kata1';
describe('Kata #1: Par o Impar', () => {
  let ex = new ParImpar(0);
  let ex2 = new ParImpar(1);
  let ex3 = new ParImpar(2);
  let ex4 = new ParImpar(3);
  test('de 0 es par', () => {
    expect(ex.par_o_impar()).toBe('Par');
  });
  test('de 1 es impar', () => {
    expect(ex2.par_o_impar()).toBe('Impar');
  });
  test('de 2 es par', () => {
    expect(ex3.par_o_impar()).toBe('Par');
  });
  test('de 3 es impar', () => {
    expect(ex4.par_o_impar()).toBe('Impar');
  });
});

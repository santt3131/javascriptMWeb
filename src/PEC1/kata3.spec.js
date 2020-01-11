import StringClase from './kata3';
describe('Kata #3: repite String', () => {
  let ex1 = new StringClase('JavaScript', 0);
  let ex2 = new StringClase('miau', 1);
  let ex3 = new StringClase('hola', 3);
  let ex4 = new StringClase('?', 10);

  test("de (‘JavaScript’, 0) deberia ser '' ", () => {
    expect(ex1.repiteString()).toBe('');
  });
  test("de ('miau', 1) deberia ser 'miau'", () => {
    expect(ex2.repiteString()).toBe('miau');
  });
  test("de ('hola', 3) deberia ser 'holaholahola'", () => {
    expect(ex3.repiteString()).toBe('holaholahola');
  });
  test("de ('?',10) deberia ser 10", () => {
    expect(ex4.repiteString()).toBe('??????????');
  });
});

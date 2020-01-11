import repiteString from './kata3';
describe('Kata #3: repite String', () => {
  test("de (‘JavaScript’, 0) deberia ser '' ", () => {
    expect(repiteString('JavaScript', 0)).toBe('');
  });
  test("de ('miau', 1) deberia ser 'miau'", () => {
    expect(repiteString('miau', 1)).toBe('miau');
  });
  test("de ('hola', 3) deberia ser 'holaholahola'", () => {
    expect(repiteString('hola', 3)).toBe('holaholahola');
  });
  test("de ('?',10) deberia ser 10", () => {
    expect(repiteString('?', 10)).toBe('??????????');
  });
});

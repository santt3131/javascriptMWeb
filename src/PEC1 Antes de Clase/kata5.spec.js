import elimina_los_espacios from './kata5';
describe('Kata #5: elimina los espacios', () => {
  test("de 'buenos días' deberia ser 'buenosdías' ", () => {
    expect(elimina_los_espacios('buenos días')).toBe('buenosdías');
  });
  test("de ' pastel de zanahoria ' deberia ser 'pasteldezanahoria' ", () => {
    expect(elimina_los_espacios(' pastel de zanahoria ')).toBe('pasteldezanahoria');
  });
  test("de 'dábale arroz a la zorra el abad' deberia ser 'dábalearrozalazorraelabad' ", () => {
    expect(elimina_los_espacios('dábale arroz a la zorra el abad')).toBe(
      'dábalearrozalazorraelabad'
    );
  });
});

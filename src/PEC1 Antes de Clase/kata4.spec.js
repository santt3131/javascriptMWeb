import elimina_primer_y_ultimo from './kata4';
describe('Kata #4: Elimina el primer y último carácter, con excepción si tiene menos de 2 caracteres', () => {
  test(" de ('JavaScript') deberia ser 'avaScrip' ", () => {
    expect(elimina_primer_y_ultimo('JavaScript')).toBe('avaScrip');
  });
  test(" de ('Alejandría') deberia ser 'lejandrí' ", () => {
    expect(elimina_primer_y_ultimo('Alejandría')).toBe('lejandrí');
  });
  test(" de ('hidrógeno') deberia ser 'idrógen' ", () => {
    expect(elimina_primer_y_ultimo('hidrógeno')).toBe('idrógen');
  });
  test(" de (ok) deberia ser 'ok' ", () => {
    expect(elimina_primer_y_ultimo('ok')).toBe('ok');
  });
});

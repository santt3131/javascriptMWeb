import {
  getStandings,
  getCalendario,
  getCPichichi,
  getDetallesEquipos,
  getDetallesEquiposExtra
} from './api';

export default async function init() {
  const standings = await getStandings();
  standings.mostrarClasificacion();

  const calendario = await getCalendario();
  calendario.mostrarCalendario();

  const cPichichi = await getCPichichi();
  cPichichi.mostrarClasificacionPichichi();

  const teamDetallesEquipos = await getDetallesEquipos();
  teamDetallesEquipos.mostrarTeamDetail();

  const teamDetallesEquiposExtra = await getDetallesEquiposExtra();
  teamDetallesEquiposExtra.mostrarTeamDetailExtra();
}

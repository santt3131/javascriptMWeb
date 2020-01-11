import {
  prepareStandings,
  prepareCalendario,
  prepareCPichichi,
  prepareDetallesEquipos,
  prepareDetallesEquiposExtra
} from './utils';
import { ENDPOINTS, TOKEN } from './config';
import { Clasificacion } from './classes/Clasificacion';
import { Calendario } from './classes/Calendario';
import { ClasificacionPichichi } from './classes/ClasificacionPichichi';
import { TeamDetail } from './classes/TeamDetail';
import { TeamDetailExtra } from './classes/TeamDetailExtra';

const headers = new Headers();
headers.append(TOKEN.AUTHTOKEN, TOKEN.TOKENID);

export async function getEndpoint(url) {
  try {
    const response = await fetch(url, { method: 'GET', headers });
    let jsonComplete = await response.json();
    return jsonComplete;
  } catch (error) {
    console.log('fetch failed', error);
  }
}

export async function getStandings() {
  const contenidoStandings = await getEndpoint(ENDPOINTS.STANDINGS);
  const objTreatedClasificacion = await prepareStandings(contenidoStandings);
  return new Clasificacion(
    objTreatedClasificacion.competitioName,
    objTreatedClasificacion.jornadaActual,
    objTreatedClasificacion.clasificacion
  );
}

export async function getCalendario() {
  const contenidoCalendario = await getEndpoint(ENDPOINTS.MATCHES);
  const objTreatedCalendario = await prepareCalendario(contenidoCalendario);

  return new Calendario(objTreatedCalendario);
}

export async function getCPichichi() {
  const contenidoCPichichi = await getEndpoint(ENDPOINTS.SCORERS);
  const ArrayTreatedCPichichi = await prepareCPichichi(contenidoCPichichi);
  return new ClasificacionPichichi(ArrayTreatedCPichichi);
}

export async function getDetallesEquipos() {
  const contenidoDetallesEquipos = await getEndpoint(ENDPOINTS.TEAM);
  const objTreatedDetallesEquipos = await prepareDetallesEquipos(contenidoDetallesEquipos);
  return new TeamDetail(objTreatedDetallesEquipos);
}

export async function getDetallesEquiposExtra() {
  const contenidoDetallesEquiposExtra = await getEndpoint(ENDPOINTS.DETALLEEQUIPOEXTRA);
  const objTreatedDetallesEquiposExtra = await prepareDetallesEquiposExtra(
    contenidoDetallesEquiposExtra
  );
  return new TeamDetailExtra(objTreatedDetallesEquiposExtra);
}

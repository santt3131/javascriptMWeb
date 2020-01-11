import { getStandings, getMatches, getScorers, getTeamDetails } from './api';
import { TEAM_ID } from './config';

export default async function init() {
  //CLASIFICACION
  async function funcStanding() {
    const standings = await getStandings();
    standings.logData();
    standings.renderData();
    var eliminarStanding = document.getElementById('spinnerTotalStandings');
    if (eliminarStanding) {
      eliminarStanding.innerHTML = '';
    }
  }

  funcStanding();

  //SCORERS okok
  async function funScore() {
    const scorers = await getScorers();
    scorers.logData();
    scorers.renderData();
    //var eliminarScore = document.getElementById('spinnerScore');
    //eliminarScore.innerHTML = '';

    ////TEAM DETALLES - STANDINGS  / SCORERS - CLICK TABLE
    const targetDivMainContent = document.getElementById('content');
    const targetDivMainScorers = document.getElementById('scorers');
    targetDivMainContent.addEventListener('click', seleccionarTeam, false);
    targetDivMainScorers.addEventListener('click', seleccionarTeam, false);

    //MATCHES - CLICK BUTTON
    const buttonMatches = document.getElementById('buttonMatches');
    buttonMatches.addEventListener('click', seleccionarMatches, false);

    //MATCHES - CLICK TABLE
    //si esta la tabla envio el evento , es decir si ya selecciono el dropdown
    const tablaMatch = document.getElementById('match');
    if (tablaMatch) {
      const targetDivMatches = document.getElementById('matches');
      targetDivMatches.addEventListener('click', seleccionarTeam, false); //testing
    }

    //STANDINGS TESTING
    const buttonStandings = document.getElementById('buttonStandings');
    buttonStandings.addEventListener(
      'click',
      function() {
        console.log('presionando standings');
        funcStanding();
        funScore();
      },
      false
    );
  }

  funScore();

  ////TEAM DETALLES - STANDINGS  / SCORERS  - CLICK TABLE
  async function seleccionarTeam() {
    const teamDetails = await getTeamDetails(event.target.dataset.id);
    teamDetails.logData();
    teamDetails.renderData();
  }

  //MATCHES
  async function seleccionarMatches() {
    const matches = await getMatches();
    matches.renderData();
  }

  /* 
  PREGUNTA
  -------
  salio un problema de asincronia cuando tenia mi total standings 
  y scorers con el callback 
  por ejemplo :
  const targetDivMainContent = document.getElementById("content");
  targetDivMainContent.addEventListener("click", seleccionarTeam, false);

  El mensaje era : 'addEventListener' of null, es decir mi targetDivMainContent estaba
  recibiendo a null porque se estaba ejecutando antes el renderizado y recibia null,
  para solucionarlo (aunque no lo veo correcto esteticamente) lo he puesto en el 
  callback del score . ¿Alguna solucion más optima o estetica?
 */
}

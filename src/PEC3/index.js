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
    const targetDivMatches = document.getElementById('matches');
    targetDivMatches.addEventListener('click', seleccionarTeam, false); //testing

    //STANDINGS TESTING
    const buttonStandings = document.getElementById('buttonStandings');
    buttonStandings.addEventListener(
      'click',
      function() {
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
}

import { ENDPOINTS, API_TOKEN } from './config';
import {
  prepareMatches,
  prepareScorers,
  prepareStandings,
  prepareTeamDetails
} from './utils/prepareData';
import { Matches, Scorers, Standings, Team } from './Classes';

const headers = new Headers();
headers.append('X-Auth-Token', API_TOKEN);

async function getEndpoint(url) {
  try {
    const response = await fetch(url, { method: 'GET', headers });
    const apiData = await response.json();

    return apiData;
  } catch (err) {
    console.log('fetch failed', err);
  }
}

export async function getStandings() {
  const apiData = await getEndpoint(ENDPOINTS.STANDINGS);
  const preparedData = prepareStandings(apiData);

  return new Standings(preparedData);
}

export async function getMatches() {
  const apiData = await getEndpoint(ENDPOINTS.MATCHES);
  const preparedData = prepareMatches(apiData);

  return new Matches(preparedData);
}

export async function getScorers() {
  const apiData = await getEndpoint(ENDPOINTS.SCORERS);
  const preparedData = prepareScorers(apiData);

  return new Scorers(preparedData);
}

export async function getTeamDetails(teamId) {
  const teamEndpoint = `${ENDPOINTS.TEAM_DETAILS}/${teamId}`;
  const apiData = await getEndpoint(teamEndpoint);
  console.log('1 llamando APIDATA');
  console.log(apiData);

  const preparedData = prepareTeamDetails(apiData);
  console.log('2 llamando preparedData');
  console.log(preparedData);

  return new Team(preparedData);
}

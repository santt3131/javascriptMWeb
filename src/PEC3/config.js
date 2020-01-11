const COMPETITION_ID = 2014;

const API = 'https://API.football-data.org/v2';

export const TEAM_ID = 80;

export const API_TOKEN = 'c76c8149aa4c4a36b55cf2040b5d2081';

export const ENDPOINTS = {
  COMPETITION: `${API}/competitions/${COMPETITION_ID}/teams`,
  STANDINGS: `${API}/competitions/${COMPETITION_ID}/standings`,
  MATCHES: `${API}/competitions/${COMPETITION_ID}/matches`,
  SCORERS: `${API}/competitions/${COMPETITION_ID}/scorers`,
  TEAM_DETAILS: `${API}/teams`
};

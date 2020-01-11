export const COMPETITION_ID = 2014;
export const TEAM_ID = 81; //Ejemplo para el PEC3 FC Barcelona: 81

export const api = 'https://api.football-data.org/v2';
export const TOKEN = {
  AUTHTOKEN: 'X-Auth-Token',
  TOKENID: 'c76c8149aa4c4a36b55cf2040b5d2081'
};

export const ENDPOINTS = {
  TEAM: `${api}/competitions/${COMPETITION_ID}/teams`,
  STANDINGS: `${api}/competitions/${COMPETITION_ID}/standings`,
  MATCHES: `${api}/competitions/${COMPETITION_ID}/matches`,
  SCORERS: `${api}/competitions/${COMPETITION_ID}/scorers`,
  DETALLEEQUIPOEXTRA: `${api}/teams/${TEAM_ID}`
};

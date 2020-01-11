function convertobjectToArray(myobject) {
  var resultado = Object.keys(myobject).map(function(key) {
    return [key, myobject[key]];
  });
  return resultado;
}

export async function prepareStandings(datosDeLaApi) {
  var clasificacionArray = [];
  datosDeLaApi.standings.forEach(element => {
    clasificacionArray.push(convertobjectToArray(element));
  });
  var clasificacionPre = clasificacionArray;

  var objTreatedClasificacion = {
    competitioName: datosDeLaApi.competition.name,
    jornadaActual: datosDeLaApi.season.currentMatchday,
    clasificacion: clasificacionPre
  };

  return objTreatedClasificacion;
}

export async function prepareCalendario(datosDeLaApiCalendario) {
  //Hago la declaracion de los que utilizaré como array
  var equipoVisitantePre = [];
  var equipoLocalPre = [];
  var jornadaPartidoPre;
  var clasificacionPre = [];

  //Como dice el enunciado (array con partidos) e usado convertObjectToArray
  //si necesitase el id seria convertobjectToArray(element.awayTeam.id)
  //que retornaria un array con todos los id
  datosDeLaApiCalendario.matches.forEach(element => {
    equipoVisitantePre.push(convertobjectToArray(element.awayTeam));
    equipoLocalPre.push(convertobjectToArray(element.homeTeam));
    jornadaPartidoPre = element.matchday;
    clasificacionPre.push(convertobjectToArray(element.score.fullTime));
  });

  // Retorno el obj ya tratado
  var objTreatedCalendario = {
    equipoVisitante: equipoVisitantePre, //array
    equipoLocal: equipoLocalPre, //array
    jornadaPartido: jornadaPartidoPre,
    resultado: clasificacionPre //array
  };
  return objTreatedCalendario;
}

export async function prepareCPichichi(datosDeLaApiCPichichi) {
  var numberOfGoalsPre = [];
  var playerPre = [];
  var teamPre = [];

  datosDeLaApiCPichichi.scorers.forEach(element => {
    numberOfGoalsPre.push(element.numberOfGoals);
    playerPre.push(element.player);
    teamPre.push(element.team);
  });

  var objTreatedCPichichiArray = {
    numberOfGoals: numberOfGoalsPre,
    player: playerPre,
    team: teamPre
  };

  return objTreatedCPichichiArray; // retorno un objeto con todos los datos
}

export async function prepareDetallesEquipos(datosDeLaApiDetallesEquipos) {
  var addressPre = [];
  var areaPre = [];
  var clubColorsPre = [];
  var crestUrlPre = [];
  var emailPre = [];
  var foundedPre = [];
  var idPre = [];
  var lastUpdatedPre = [];
  var namePre = [];
  var phonePre = [];
  var shortNamePre = [];
  var tlaPre = [];
  var venuePre = [];
  var websitePre = [];

  datosDeLaApiDetallesEquipos.teams.forEach(element => {
    addressPre.push(element.address);
    areaPre.push(convertobjectToArray(element.area)); //Array inside Array
    clubColorsPre.push(element.clubColors);
    crestUrlPre.push(element.crestUrl);
    emailPre.push(element.email);
    foundedPre.push(element.founded);
    idPre.push(element.id);
    lastUpdatedPre.push(element.lastUpdated);
    namePre.push(element.name);
    phonePre.push(element.phone);
    shortNamePre.push(element.shortName);
    tlaPre.push(element.tla);
    venuePre.push(element.venue);
    websitePre.push(element.website);
  });

  var objTreatedDetallesEquipos = {
    address: addressPre,
    area: areaPre,
    clubColors: clubColorsPre,
    crestUrl: crestUrlPre,
    email: emailPre,
    founded: foundedPre,
    id: idPre,
    lastUpdated: lastUpdatedPre,
    name: namePre,
    phone: phonePre,
    shortName: shortNamePre,
    tla: tlaPre,
    venue: venuePre,
    website: websitePre
  };

  return objTreatedDetallesEquipos;
}

export async function prepareDetallesEquiposExtra(datosDeLaApiDetallesEquiposExtra) {
  var objTreatedDetallesEquipos = {
    activeCompetitions: convertobjectToArray(datosDeLaApiDetallesEquiposExtra.activeCompetitions),
    address: datosDeLaApiDetallesEquiposExtra.address,
    area: convertobjectToArray(datosDeLaApiDetallesEquiposExtra.area),
    clubColors: datosDeLaApiDetallesEquiposExtra.clubColors,
    crestUrl: datosDeLaApiDetallesEquiposExtra.crestUrl,
    email: datosDeLaApiDetallesEquiposExtra.email,
    founded: datosDeLaApiDetallesEquiposExtra.founded,
    id: datosDeLaApiDetallesEquiposExtra.id,
    lastUpdated: datosDeLaApiDetallesEquiposExtra.lastUpdated,
    name: datosDeLaApiDetallesEquiposExtra.name,
    phone: datosDeLaApiDetallesEquiposExtra.phone,
    shortName: datosDeLaApiDetallesEquiposExtra.shortName,
    squad: convertobjectToArray(datosDeLaApiDetallesEquiposExtra.squad),
    tla: datosDeLaApiDetallesEquiposExtra.tla,
    venue: datosDeLaApiDetallesEquiposExtra.venue,
    website: datosDeLaApiDetallesEquiposExtra.website
  };

  return objTreatedDetallesEquipos;
}

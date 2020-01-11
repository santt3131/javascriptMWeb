import { Match } from '../Classes';

function getTypes(standings) {
  return standings.map(standingType => standingType.type);
}

function filterStandings(standings) {
  const types = getTypes(standings);

  return types.map(standingType => {
    const standingDataByType = standings.find(array => array.type === standingType);

    return standingDataByType.table.map(row => {
      const { team, position, playedGames, won, draw, lost, goalsFor, goalsAgainst } = row;
      return {
        position,
        team: team.name,
        playedGames,
        won,
        lost,
        draw,
        goalsFor,
        goalsAgainst,
        teamId: team.id // SE DEBERIA OCULTAR
      };
    });
  });
}

export function prepareStandings(data) {
  const { standings, competition, season } = data;
  const competitionName = competition.name;
  const currentMatchday = season.currentMatchday;
  const [total, home, away] = filterStandings(standings);

  return { competitionName, currentMatchday, total, home, away };
}

export function prepareMatches(data) {
  const { matches } = data;

  const filteredData = matches.map(match => {
    const { matchday, homeTeam, awayTeam, score } = match;
    const preparedData = {
      matchday,
      homeTeam: homeTeam.name,
      homeTeamId: homeTeam.id,
      homeScore: score.fullTime.homeTeam,
      awayTeam: awayTeam.name,
      awayTeamId: awayTeam.id,
      awayScore: score.fullTime.awayTeam
    };

    return new Match(preparedData);
  });

  const preparedMatches = filteredData.reduce((calendar, match) => {
    const matchDay = match.getMatchDay();

    if (!(matchDay in calendar)) {
      calendar[matchDay] = [match];
    } else {
      calendar[matchDay].push(match);
    }

    return calendar;
  }, {});

  return preparedMatches;
}

export function prepareScorers(data) {
  const { scorers } = data;

  const preparedScorers = scorers.map(scorer => {
    const { numberOfGoals, player, team } = scorer;

    return {
      player: player.name,
      team: team.name,
      goals: numberOfGoals,
      teamId: team.id
      //playerId: player.id,
    };
  });

  return preparedScorers;
}

export function prepareTeamDetails(data) {
  const { name, venue, website, crestUrl } = data;

  return {
    logo: crestUrl,
    team: name,
    stadium: venue,
    website
  };
}

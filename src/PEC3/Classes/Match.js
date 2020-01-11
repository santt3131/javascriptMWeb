export default class Match {
  constructor(data) {
    const { matchday, homeTeam, homeTeamId, awayTeam, awayTeamId, homeScore, awayScore } = data;
    this.matchDay = matchday;
    this.homeTeam = homeTeam;
    this.homeTeamId = homeTeamId;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.awayTeam = awayTeam;
    this.awayTeamId = awayTeamId;
  }

  getMatchDay() {
    return this.matchDay;
  }

  logData() {
    console.log(`${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`);
  }
}

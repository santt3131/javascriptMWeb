export default class Match {
  constructor(data) {
    const { matchday, homeTeam, awayTeam, homeScore, awayScore } = data;

    this.matchDay = matchday;
    this.homeTeam = homeTeam;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.awayTeam = awayTeam;
  }

  getMatchDay() {
    return this.matchDay;
  }

  logData() {
    console.log(`${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`);
  }
}

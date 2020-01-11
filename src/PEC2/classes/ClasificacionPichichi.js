export class ClasificacionPichichi {
  constructor(objTreatedCPichichiArray) {
    const { numberOfGoals, player, team } = objTreatedCPichichiArray;
    this.numberOfGoals = numberOfGoals;
    this.player = player;
    this.team = team;
  }

  mostrarClasificacionPichichi() {
    console.log('-------C PICHICHI---------');
    console.log('numberOfGoals: ', this.numberOfGoals);
    console.log('player :', this.player);
    console.log('team :', this.team);
  }
}

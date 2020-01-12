export default class Team {
  constructor(data) {
    const { team, stadium, website, logo } = data;
    //const { team, teamId, stadium, website, logo } = data;
    //this.teamId = teamId;
    this.logo = logo;
    this.team = team;
    this.stadium = stadium;
    this.website = website;
    this.logo = logo;
  }

  logData() {
    console.log('Team details');
    console.log(`${this.team} (${this.stadium}), ${this.website}`);
  }

  renderData() {
    const DivMainTeam = document.getElementById('team');
    //Si hay un tabla la elimino
    DivMainTeam.innerHTML = '';

    //Agrego el titulo
    var titleTeam = document.createElement('h2');
    titleTeam.textContent = 'Team details';
    DivMainTeam.appendChild(titleTeam);

    var table = document.createElement('table');
    //Agrego estilo a la tabla

    table.setAttribute('class', 'team');
    var tbody = document.createElement('tbody');

    //Cabecera Team
    var theadArray = Object.keys(this);
    var rowH = document.createElement('tr');
    theadArray.forEach(cabecera => {
      var cellH = document.createElement('th');
      cellH.textContent = cabecera.toUpperCase();
      rowH.appendChild(cellH);
    });
    tbody.appendChild(rowH);

    //Agrego los demás td
    var row = document.createElement('tr');
    Object.values(this).forEach(element => {
      if (element) {
        if (element.slice(-4) == '.svg' || element.slice(-4) == '.png') {
          var img = document.createElement('img');
          img.src = element;
          row.appendChild(img);
        } else {
          var cell = document.createElement('td');
          cell.textContent = element;
          row.appendChild(cell);
        }
      }
    });
    tbody.appendChild(row);

    table.appendChild(tbody);
    DivMainTeam.appendChild(table);
  }
}

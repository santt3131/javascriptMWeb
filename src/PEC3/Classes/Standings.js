const TYPES = { total: 'TOTAL', home: 'HOME', away: 'AWAY' };

export default class Standings {
  constructor(data) {
    const { competitionName, currentMatchday, total, home, away } = data;

    this.competitionName = competitionName;
    this.currentMatchday = currentMatchday;
    this.standings = {
      [TYPES.total]: {
        label: 'Total standings',
        data: total
      },
      [TYPES.home]: {
        label: 'Home standings',
        data: home
      },
      [TYPES.away]: {
        label: 'Away standings',
        data: away
      }
    };
  }

  getTypes() {
    return Object.values(TYPES);
  }

  logData() {
    console.log(`${this.competitionName}, jornada ${this.currentMatchday}`);
    for (const standingType in this.standings) {
      const { label, data } = this.standings[standingType];
      console.log(label);
      console.table(data);
    }
  }

  renderData() {
    //cambiando a active pestaña
    var buttonMatches = document.getElementById('buttonMatches');
    var buttonStandings = document.getElementById('buttonStandings');
    buttonMatches.setAttribute('class', '');
    buttonStandings.setAttribute('class', 'is-active');

    //Activo todo el content y sidebar y Oculto Matches
    var targetDivMainContent = document.getElementById('content');
    var contentMatchG = document.getElementById('matchesGeneral');

    if (targetDivMainContent.getAttribute('class') === 'isHidden') {
      targetDivMainContent.setAttribute('class', 'true'); //se cambiara a false porque ya se ha cargado una vez
    }

    if (contentMatchG.getAttribute('class') === 'true') {
      contentMatchG.setAttribute('class', 'isHidden');
    }

    //CLASIFICACION
    if (targetDivMainContent.getAttribute('class') === 'true') {
      //Eliminar
      targetDivMainContent.innerHTML = '';

      const dataStandings = this.standings['TOTAL'].data;
      var table = document.createElement('table');
      // agrego estilo a la tabla
      table.setAttribute('class', 'standings');
      var tbody = document.createElement('tbody');

      //Titulo H2 clasificacion
      var h2Content = document.createElement('h2');
      h2Content.textContent = this.standings['TOTAL'].label.toUpperCase();
      targetDivMainContent.appendChild(h2Content);

      //Cabecera primero
      var theadArray = Object.keys(dataStandings[0]);
      var rowH = document.createElement('tr');
      theadArray.forEach(cabecera => {
        if (cabecera !== 'teamId') {
          var cellH = document.createElement('th');
          cellH.textContent = cabecera.toUpperCase();
          rowH.appendChild(cellH);
        }
      });
      tbody.appendChild(rowH);

      //Agrego los demás td
      dataStandings.forEach(rowD => {
        var row = document.createElement('tr');
        Object.keys(rowD).forEach(cellD => {
          //condicion para no agregar el teamId en el html
          if (cellD !== 'teamId') {
            var cell = document.createElement('td');
            cell.textContent = rowD[cellD];
            //Agrego el data-id para Detalles
            cell.setAttribute('data-id', rowD['teamId']);
            row.appendChild(cell);
          }
        });

        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      targetDivMainContent.appendChild(table);
    }
  }
}

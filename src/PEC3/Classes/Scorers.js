export default class Scorers {
  constructor(data) {
    this.scorers = data;
  }

  logData() {
    console.log('Scorers:');

    this.scorers.forEach(scorer => {
      const { player, team, goals } = scorer;

      console.log(`${player} (${team}): ${goals}`);
    });
  }

  renderData() {
    var sidebar = document.getElementById('sidebar');

    if (sidebar.getAttribute('class') === 'isHidden') {
      sidebar.setAttribute('class', 'true');
    }

    if (sidebar.getAttribute('class') === 'true') {
      //Elimino el subcontenedor
      var contScorers = document.getElementById('scorers');
      contScorers.innerHTML = '';

      var table = document.createElement('table');
      table.setAttribute('class', 'scorers');
      var tbody = document.createElement('tbody');

      const targetDivMainScorers = document.getElementById('scorers');

      //Titulo H2 clasificacion
      var h2 = document.createElement('h2');
      h2.textContent = 'SCORERS';
      targetDivMainScorers.appendChild(h2);

      //Cabecera primero ok
      var theadArray = Object.keys(this.scorers[0]);
      var rowH = document.createElement('tr');
      theadArray.forEach(cabecera => {
        if (cabecera !== 'teamId') {
          var cellH = document.createElement('th');
          cellH.textContent = cabecera.toUpperCase();
          rowH.appendChild(cellH);
        }
      });
      tbody.appendChild(rowH);

      this.scorers.forEach(rowD => {
        var row = document.createElement('tr');
        Object.keys(rowD).forEach(cellD => {
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
      targetDivMainScorers.appendChild(table);
    }
  }
}

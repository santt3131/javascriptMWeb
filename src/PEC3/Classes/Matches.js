export default class Matches {
  constructor(data) {
    this.matches = data;
  }

  logData() {
    console.log(`Matches`);
    //homeTeam homeScore
    //awayTeam awayScore

    for (const matchDayNumber in this.matches) {
      const matchDayResults = this.matches[matchDayNumber];

      console.log(`Matchday #${matchDayNumber}`);

      matchDayResults.forEach(match => {
        match.logData();
      });
    }
  }

  renderData() {
    //cambiando a active pestaña
    var buttonMatches = document.getElementById('buttonMatches');
    var buttonStandings = document.getElementById('buttonStandings');
    buttonMatches.setAttribute('class', 'is-active');
    buttonStandings.setAttribute('class', '');

    //Oculto todo el content y sidebar
    var content = document.getElementById('content');
    var sidebar = document.getElementById('sidebar');
    var contentMatchG = document.getElementById('matchesGeneral');

    if (content.getAttribute('class') === 'true') {
      content.setAttribute('class', 'isHidden');
    }
    if (sidebar.getAttribute('class') === 'true') {
      sidebar.setAttribute('class', 'isHidden');
    }

    if (contentMatchG.getAttribute('class') === 'isHidden') {
      contentMatchG.setAttribute('class', 'true');
    }

    if (contentMatchG.getAttribute('class') === 'true') {
      //Mostrando el spinner
      var spinnerMatch = document.getElementById('spinnerMatches');
      spinnerMatch.setAttribute('class', '');

      var contMatch = document.getElementById('matches');

      //Limpiando subcontenedor
      contMatch.innerHTML = '';

      //Titulo H2 clasificacion
      var h2 = document.createElement('h2');
      h2.textContent = 'MATCHES';
      contMatch.appendChild(h2);

      //DROP DOWN
      //Create
      var select = document.createElement('select');
      select.setAttribute('id', 'dropdownMatch');
      for (const matchDayNumber in this.matches) {
        var option = document.createElement('option');
        option.textContent = matchDayNumber;
        option.setAttribute('value', matchDayNumber);
        select.appendChild(option);
      }
      contMatch.appendChild(select);
      //contMatch.insertBefore(select, document.getElementById('spinnerMatches'));
    }

    function mySeleccionDay() {
      //Ocultando el spinner
      var spinnerMatch = document.getElementById('spinnerMatches');
      spinnerMatch.setAttribute('class', 'isHidden');

      //para limpieza de tabla - DROPDOWN
      const matchTable = document.getElementById('match');
      if (matchTable) {
        contMatch.removeChild(matchTable);
      }

      var valueSelected = select.value;
      //Segun lo seleccionado pintara
      var calendario = this.matches[valueSelected];
      calendario.forEach(miCalendario => {
        miCalendario.logData();
      });

      //Creo la tabla con los datos seleccionados
      var table = document.createElement('table');
      table.setAttribute('id', 'match');

      var tbody = document.createElement('tbody');

      //Cabecera
      var theadArray = ['HOME TEAM', 'HOME SCORE', 'AWAY SCORE', 'AWAY TEAM'];
      var rowH = document.createElement('tr');
      theadArray.forEach(cabecera => {
        var cellH = document.createElement('th');
        cellH.textContent = cabecera.toUpperCase();
        rowH.appendChild(cellH);
      });
      tbody.appendChild(rowH);

      //Agrego los demás td
      calendario.forEach(rowD => {
        var row = document.createElement('tr');
        Object.keys(rowD).forEach(cellD => {
          if (cellD !== 'matchDay') {
            var cell = document.createElement('td');
            cell.textContent = rowD[cellD];
            row.appendChild(cell);
          }
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      contMatch.appendChild(table);
    }

    //Event - Dropdown - callback
    select.addEventListener('change', mySeleccionDay.bind(this), false);
  }
}

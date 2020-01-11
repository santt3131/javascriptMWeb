export class TeamDetailExtra {
  constructor(objTreatedDetallesEquiposExtra) {
    const {
      activeCompetitions,
      address,
      area,
      clubColors,
      crestUrl,
      email,
      founded,
      id,
      lastUpdated,
      name,
      phone,
      shortName,
      squad,
      tla,
      venue,
      website
    } = objTreatedDetallesEquiposExtra;
    this.activeCompetitions = activeCompetitions;
    this.address = address;
    this.area = area;
    this.clubColors = clubColors;
    this.crestUrl = crestUrl;
    this.email = email;
    this.founded = founded;
    this.id = id;
    this.lastUpdated = lastUpdated;
    this.name = name;
    this.phone = phone;
    this.shortName = shortName;
    this.squad = squad;
    this.tla = tla;
    this.venue = venue;
    this.website = website;
  }

  mostrarTeamDetailExtra() {
    console.log('-------DETALLES EQUIPOS EXTRA------');
    console.log('activeCompetitions: ', this.activeCompetitions);
    console.log('address: ', this.address);
    console.log('area :' + this.area);
    console.log('clubColors :', this.clubColors);
    console.log('crestUrl :', this.crestUrl);
    console.log('email :', this.email);
    console.log('founded  :', this.founded);
    console.log('id :', this.id);
    console.log('lastUpdated :', this.lastUpdated);
    console.log('name :', this.name);
    console.log('phone :', this.phone);
    console.log('shortName :', this.shortName);
    console.log('squad : ', this.squad);
    console.log('tla : ', this.tla);
    console.log('venue :', this.venue);
    console.log('website  :', this.website);
  }
}

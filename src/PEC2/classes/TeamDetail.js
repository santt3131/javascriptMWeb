export class TeamDetail {
  constructor(objTreatedDetallesEquipos) {
    const {
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
      tla,
      venue,
      website
    } = objTreatedDetallesEquipos;
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
    this.tla = tla;
    this.venue = venue;
    this.website = website;
  }

  mostrarTeamDetail() {
    console.log('-------DETALLES EQUIPOS---------');
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
    console.log('tla : ', this.tla);
    console.log('venue :', this.venue);
    console.log('website  :', this.website);
  }
}

class breweryQuerier {
  _locations = {};

  getBrewery = function (l) {
    return {}
  };

  createBrewery = function ({ name, country, city, street }) {
  };

  constructor(locations) {
    this._locations = locations;

    for (let location in this._locations) {
      this.createBrewery(this.getBrewery(this._locations[location]));
    }
  }
}

new breweryQuerier({
  guadalajara: {
    lat: 40.634595,
    lng: -3.16871,
  },
  caracas: {
    lat: 10.4806,
    lng: -66.8983,
  },
  munich: {
    lat: 48.1351,
    lng: 11.582,
  },
});

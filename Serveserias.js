var axios = require('axios');



const ciudades = {
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
    hove: {
        lng: -0.17152,
        lat: 50.834247,
    }
}


for (var ciudad in ciudades){
    city = ciudades[ciudad]
var config = {
    method: 'get',
    url: `https://api.openbrewerydb.org/breweries?by_dist=${city.lat},${city.lng}&per_page=1`,
    headers: {
    }

};

console.log(config.url)

axios(config)
    .then(function (response) {
        // Respuesta de la API
        // console.log(JSON.stringify(response.data));
        console.log("=======================================================")
        console.log(response.data[0].name);
        console.log(response.data[0].country);
        console.log(response.data[0].city);
        console.log(response.data[0].street);
    })
    .catch(function (error) {
        // En caso de error imprime el error
        console.log(error);
    });
}

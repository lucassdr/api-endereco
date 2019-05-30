const addressStr = require('../rotas/distancia');
const googleMapsApiKey = require('../config/configuracao')
const urlGoogleMaps = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=${googleMapsApiKey}`;

module.exports = urlGoogleMaps;
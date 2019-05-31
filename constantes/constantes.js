const googleMapsApiKey = require('../config/configuracao')
const urlGoogleMaps = `https://maps.googleapis.com/maps/api/geocode/json?key=${googleMapsApiKey}`;

module.exports = urlGoogleMaps;
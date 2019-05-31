const axios = require('axios');
const urlGoogleMaps = require('../constantes/constantes');
const combinaton = require('../controle/combinacao');
const calculateDistance = require('../controle/calculardistancia');

let start = (app) => {
    app.post('/distancia', calculatesDistance);
    app.get('/', hello);
};

let calculatesDistance = (req, res) => {

    let addressList = [];

    let promisesList = req.body.map((addressStr) => {

        return axios.get(urlGoogleMaps + `&address=${addressStr}`)
            .then(res => {
                addressList.push({
                    "address": res.data.results[0].formatted_address
                    , "lat": res.data.results[0].geometry.location.lat
                    , "long": res.data.results[0].geometry.location.lng
                })
            }).catch(err => {
                console.log('Error:', err);
            });

    })

    Promise.all(promisesList)
        .then(function (results) {
            let combinedAddressList = combinaton(addressList);

            let calculatedAddressList = combinedAddressList.map((addressCombined) => {
                let distance = calculateDistance(addressCombined.addressA.lat, addressCombined.addressA.long
                    , addressCombined.addressB.lat, addressCombined.addressB.long);

                addressCombined.distance = distance;
                addressCombined.distanceStr = distance.toFixed(1).concat(" Km de distância.");

                return addressCombined;

            });

            calculatedAddressList.sort((a,b) => a.distance - b.distancia);

            res.json({ calculatedAddressList });
        });
}

let hello = (req, res) => {
    res.json({ "ok": true });
}


module.exports = {
    "start": start
};

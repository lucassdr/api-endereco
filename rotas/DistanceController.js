const axios = require('axios');
const urlGoogleMaps = require('../constantes/constantes');
const combinaton = require('../controle/combinacao');
const calcularDistancia = require('../controle/calculardistancia');

let start = (app) => {
    app.post('/distancia', calculaDistancia);
    app.get('/', hello);
};

let calculaDistancia = (req, res) => {    

    console.log('iniciou distancia');

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
            console.log("finalizado", addressList);
            let combinedAddressList = combinaton(addressList);

            let addressListCalculado = combinedAddressList.map((addressCombined) => {
                let distancia = calcularDistancia(addressCombined.addressA.lat, addressCombined.addressA.long
                    , addressCombined.addressB.lat, addressCombined.addressB.long);
                addressCombined.distancia = distancia.toFixed(2);
                return addressCombined;

            })

            res.json({ addressListCalculado });
        });
}

let hello = (req, res) => {    
    res.json({ "ok": true });
}


module.exports = {
    "start": start    
};

const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios')
const googleMapsClient = require('@google/maps')
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.post('/distancia', (req, res) => {

    let addressList = [];

    req.body.map((addressStr) => {

        

        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyC2mW5fz2VBY9VSztro48UiA1_k1JKdQ9E`)
            .then(res => {
                addressList.push({
                    "address": res.data.results[0].formatted_address
                    , "lat": res.data.results[0].geometry.location.lat
                    , "long": res.data.results[0].geometry.location.lng
                })
                console.log("========================");
                console.log("addressList", addressList);
            }).catch(err => {
                console.log('Error: ' + err)
            });
        return true;

    });

    console.log("finalizado", addressList);
    res.status(200).json(addressList);
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Problema', err)
    }
    console.log(`Servidor no ar na porta ${port}`)
})

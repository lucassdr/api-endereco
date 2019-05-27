const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios')
const googleMapsClient = require('@google/maps')
const app = express();
const port = 3000;

app.use(bodyParser.json())

// googleMapsClient.createClient({
//     key: 'AIzaSyC2mW5fz2VBY9VSztro48UiA1_k1JKdQ9E'
// })


// googleMapsClient.geocode({
//     address: addressStr
// }, function (err, res) {
//     if (!err) {
//         console.log(res.json.results)
//     }
// })


app.post('/distancia', (req, res) => {

    let addressList = req.body.map((addressStr) => {

       
        

        // return res.status(200).json({mensagem: geocode})
        return {
            "address": addressStr
            , "lat": 999
            , "long": 9999
        };
    });

    res.status(200).json(addressList);
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Problema', err)
    }
    console.log(`Servidor no ar na porta ${port}`)
})


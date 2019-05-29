const router = require('express').Router();
const axios = require('axios')
const googleMapsApiKey = require('../config/configuracao')

router.post('/', (req, res) => {

    let addressList = [];

    let promisesList = req.body.map((addressStr) => {

        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=${googleMapsApiKey}`)
            .then(res => {
                addressList.push({
                    "address": res.data.results[0].formatted_address
                    , "lat": res.data.results[0].geometry.location.lat
                    , "long": res.data.results[0].geometry.location.lng
                })
            }).catch(err => {
                console.log('Error:', err)
            });

    })

    Promise.all(promisesList)
        .then(function (results) {
            console.log("finalizado", addressList);
            res.json({ addressList });
        })

})

module.exports = router;
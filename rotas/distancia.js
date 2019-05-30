const router = require('express').Router();
const axios = require('axios')
const urlGoogleMaps = require('../constantes/constantes')
const combinaton = require('../controle/combinacao')


router.post('/', (req, res) => {

    let addressList = [];

    let promisesList = req.body.map((addressStr) => {

        return axios.get(urlGoogleMaps)
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
            let combinedAddressList = combinaton(addressList);
            res.json({ combinedAddressList });
        })

})

module.exports = router;


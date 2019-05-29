const router = require('express').Router();
const express = require('express');
const axios = require('axios')

router.post('/', (req, res) => {

    let addressList = [];

    let promisesList = req.body.map((addressStr) => {

        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyC2mW5fz2VBY9VSztro48UiA1_k1JKdQ9E`)
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
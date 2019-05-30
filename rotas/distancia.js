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
            let combinedAddressList = combinaton(addressList);
            res.json({ combinedAddressList });
        })

})

// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {

//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2 - lat1);  // deg2rad below
//     var dLon = deg2rad(lon2 - lon1);
//     var a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2)
//         ;
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var d = R * c; // Distance in km
//     return d;
// }

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function combinaton(addressList) {
    // let addressList = ["Endereço 1", "Endereço 2", "Endereço 3", "Endereço 4"];
    let addressListLength = addressList.length;
    let combinatonArray = [];

    for (i = 0; i < addressListLength; i++) {
        for (j = i + 1; j < addressListLength; j++) {
            combinatonArray.push({"addressA":addressList[i],"addressB":addressList[j] })
            console.log(JSON.stringify(addressList[i]) + " - \n" + JSON.stringify(addressList[j]))
        }
    }

    return combinatonArray;

}

module.exports = router;
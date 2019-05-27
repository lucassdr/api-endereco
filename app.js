const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.post('/distancia', (req, res) => {
    
    let addressList = req.body.map((addressStr) => {
        return { "address": addressStr
            , "lat": 999
            , "long": 99999
        };
    });
    
    res.status(200).json(addressList);
})

app.listen(port,(err) => {
    if(err){
        return console.log('Problema', err)
    }
    console.log(`Servidor no ar na porta ${port}`)
})


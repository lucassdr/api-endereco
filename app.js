const express = require('express');
const bodyParser = require('body-parser')
const rotaDistancia = require('../desafio/rotas/distancia')
const server = require('./servidor/servidor')
const app = express();

app.use(bodyParser.json())

app.use('/', rotaDistancia)
app.use('/distancia', rotaDistancia)

app.listen(server);


module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const server = require('./servidor/servidor');
const app = express();

const DistanceController = require('./rotas/DistanceController');

app.use(bodyParser.json());

DistanceController.start(app);

app.listen(server);
module.exports = app;

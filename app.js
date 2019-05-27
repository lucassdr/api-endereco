const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.post('/distancia', (req, res) => {
    
    // console.log(req.body);
    res.status(200).json(req.body);

    // res.status(200).json({mensagem: "teste"})

})

app.listen(port,(err) => {
    if(err){
        return console.log('Problema', err)
    }
    console.log(`Servidor no ar na porta ${port}`)
})
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o Banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log("Conexão com MongoDB realizada com sucesso!");
    }).catch((erro) => {
        console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
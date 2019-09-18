// Importando Express e salvando uma instância em app
const app = require('express')()

// Inicializa as dependências em app, facilitando o geresnciamento das mesmas
const consign = require('consign')

// Constante que cria o DB
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3001, () => console.log('Backend executando...'))
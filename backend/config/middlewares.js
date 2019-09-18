const bodyParser = require('body-parser') // Faz o parse
const cors = require('cors') // Várias origens

// Padrão para utilizar o consign(), que foi importado no index.js 
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}
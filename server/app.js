const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = require('./routes/phone.routes');
app.use('/phones', routes)
app.get('/', (req, res, next) => { res.send('Funciona la appp')

})

module.exports=app
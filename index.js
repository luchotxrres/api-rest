'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/services', (req, res) => {
    res.send(200, {services: []})
})

app.get('/api/services/:serviceId', (req, res) => {

})

app.post('/api/services', (req, res) => {
    console.log(req.body);
    res.status(200).send( {message: 'Servicio recibido'} )
})

app.put('/api/services/:serviceId', (req, res) => {

})

app.delete('/api/services/:serviceId', (req, res) => {

})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
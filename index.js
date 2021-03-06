const express = require('express')
const cors = require('cors')
const path = require('path')
const { dbConnection } = require('./database/config')
require('dotenv').config()


//Crear servidor aplicacion de express
const app = express()

//Base de datos
dbConnection()

//Directorio publico
app.use(express.static('public'))

//CORS -> proteccion de backend para un dominio de front fijo
app.use(cors())

//Lectura y parseo del body
app.use(express.json())

//rutas
app.use('/api/auth', require('./routes/auth'))

//Manejar posibles rutas
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

//Port
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
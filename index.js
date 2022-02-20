const express = require('express')
const cors = require('cors')
require('dotenv').config()


//Crear servidor aplicacion de express
const app = express()

//Directorio publico
app.use(express.static('public'))

//CORS -> proteccion de backend para un dominio de front fijo
app.use(cors())

//Lectura y parseo del body
app.use(express.json())

//rutas
app.use('/api/auth', require('./routes/auth'))

//Port
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
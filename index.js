const express = require('express')
const cors = require('cors')


//Crear servidor aplicacion de express
const app = express()

//CORS -> proteccion de backend para un dominio de front fijo
app.use(cors())

//Lectura y parseo del body
app.use(express.json())

//rutas
app.use('/api/auth', require('./routes/auth'))

//Port
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${3000}`)
})
const express = require('express')
const res = require('express/lib/response')


//Crear servidor aplicacion de express
const app = express()

//rutas
app.use('/api/auth', require('./routes/auth'))

//Port
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${3000}`)
})
const express = require('express')
const res = require('express/lib/response')


//Crear servidor aplicacion de express
const app = express()

//GET
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'todo ok',
        uid: '1234'
    })
})


//Port
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${3000}`)
})
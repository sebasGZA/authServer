const { response } = require('express')


const crearUsuario = (req, res = response) => {
    const { email, name, password } = req.body
    console.log(email, name, password)
    return res.json({
        ok: 'true',
        msg: 'crear Usuario /new'
    })
}

const loginUsuario = (req, res = response) => {
    const { email, password } = req.body
    console.log(email, password)
    return res.json({
        ok: 'true',
        msg: 'Login de usuario /'
    })
}

const revalidarToken = (req, res = response) => {
    return res.json({
        ok: 'true',
        msg: 'renew'
    })
}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}
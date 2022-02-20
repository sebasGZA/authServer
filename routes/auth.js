const { Router } = require('express')

const router = Router()

//Crear nuevo usuario
router.post('/new', (req, res) => {
    return res.json({
        ok: 'true',
        msg: 'crear Usuario /new'
    })
})

//Login de usuario
router.post('/', (req, res) => {
    return res.json({
        ok: 'true',
        msg: 'Login de usuario /'
    })
})

//validar y revalidar doken
router.get('/renew', (req, res) => {
    return res.json({
        ok: 'true',
        msg: 'renew'
    })
})

module.exports = router
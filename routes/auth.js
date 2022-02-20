const { Router } = require('express')
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

const router = Router()

//Crear nuevo usuario
router.post('/new', crearUsuario)

//Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contaseña obligatorio').isLength(6)
], loginUsuario)

//validar y revalidar doken
router.get('/renew', revalidarToken)

module.exports = router
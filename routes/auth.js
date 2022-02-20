const { Router } = require('express')
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

//Crear nuevo usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contaseña obligatorio').isLength({ min: 6 }),
    validarCampos
], crearUsuario)

//Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contaseña obligatorio').isLength({ min: 6 }),
    validarCampos
], loginUsuario)

//validar y revalidar doken
router.get('/renew', revalidarToken)

module.exports = router
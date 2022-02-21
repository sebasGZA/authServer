const { response } = require('express')
var ObjectId = require('mongoose').Types.ObjectId;
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const { gererarJWT } = require('../helpers/jwt');
const { db } = require('../models/Usuario');


const crearUsuario = async(req, res = response) => {

    const { email, name, password } = req.body

    try {
        // Validar email
        let usuario = await Usuario.findOne({ email })
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            })
        }

        //Crear usuario con modelo
        const dbUser = new Usuario(req.body)

        //Hash password
        const salt = bcrypt.genSaltSync(10)
        dbUser.password = bcrypt.hashSync(password, salt)

        //Generar JWT
        const token = await gererarJWT(dbUser.id, name)

        //Crear usuario en bd
        await dbUser.save()

        //Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: 'true',
            msg: 'Por favor hable con el admin'
        })
    }



}

const loginUsuario = async(req, res = response) => {

    const { email, password } = req.body

    try {
        const dbUser = await Usuario.findOne({ email })
        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El email no existe'
            })
        }

        //validar password concuerda
        const validPassword = bcrypt.compareSync(password, dbUser.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es válido'
            })
        }


        //Generar JWT
        const token = await gererarJWT(dbUser.id, dbUser.name)

        //Respuesta del servicio
        return res.status(200).json({
            ok: true,
            name: dbUser.name,
            uid: dbUser.id,
            email,
            token: token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

const revalidarToken = async(req, res = response) => {
    const { uid } = req

    const dbUser = await Usuario.findById(uid)

    const token = await gererarJWT(uid, dbUser.name)
    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token,
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}
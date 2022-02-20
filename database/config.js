const mongo = require("mongoose")

const dbConnection = async() => {
    try {
        await mongo.connect(process.env.BD_CNN)

        console.log('db mongo online')
    } catch (error) {
        console.log(error)
        throw new Error('Error al inicializar base de datos')
    }
}

module.exports = {
    dbConnection
}
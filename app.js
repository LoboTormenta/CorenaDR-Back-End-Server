// Requires Importacion de librerias
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables

var app = express();



//Conexion a la base dedatos

mongoose.connection.openUri('mongodb://localhost:27017:imagenesDB', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },(err, res)=>{
 if (err) throw err;

 console.log('Base de datos: \x1b[32m%s\x1b[0m','online');



});


// Rutas

app.get('/', (req, res, next)  => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })

});


/// Escuchar peticiones express

app.listen(3000,() =>{
 console.log('Express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m','online');
 

});
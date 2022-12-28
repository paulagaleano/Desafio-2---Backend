const express = require("express")
const app = express();

//Setear todo el servidor

//Endpoints (Todos los request que recibe mi servidor y contesta + "get" = tipo de mensaje http)

app.get("/", (req, res) => {  //ENDPOINT BASE
    res.send("Hola mundo");
});

app.get("/bienvenido", function (req, res) {
    const respuesta = `
    <html> 
        <body> 
            <h1> ejemplo </h1>
        </body>
    </html>
    `;
    res.send(respuesta);
});

app.get('/usuario', (req, res) => {
    const us = {
        nombre: 'Paula',
        apellido: 'G',
        edad: 100,
        mail: 'ppaug@gmail.com'
    }
    res.send(us);
});

//OBJETO REQUEST



//Levanto el servidor
app.listen(3000);
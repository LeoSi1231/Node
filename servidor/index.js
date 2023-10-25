const express = require('express');
const app = express();
const puerto = 3000; 
const routerPersonas = require('./routes/personas.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


mongoose.connect(
    "mongodb://127.0.0.1:27017/express",
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Conectado a MongoDB"));

app.use("/personas", routerPersonas);

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto http://localhost:${puerto}`);
});
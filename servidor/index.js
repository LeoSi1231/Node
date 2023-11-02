const express = require('express');
const app = express();
const puerto = 3000; 
const routerPersonas = require('./routes/personas.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.use(bodyParser.urlencoded({ extended: true }));
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
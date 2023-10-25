const Persona = require('../models/persona');


async function verPersonas(req,res) {
    const personas = await Persona.find();
    let personasHtml = ""
    for (let i = 0; i < personas.length; i++) {
        personasHtml += `
        <div>
        <h1>Nombre: ${personas[i].nombre} </h1>
        <h1>Apellido: ${personas[i].apellido} </h1>
        <h1>Edad: ${personas[i].edad}</h1>
        </div>
        `
    }
    res.send(personasHtml);
}

async function crearPersona(req,res) {
    const { nombre, apellido, edad } = req.body;
    const persona = new Persona({
        nombre,
        apellido,
        edad,
    });
    await persona.save();
    res.json("Persona creada");  

}


module.exports = {
    verPersonas,
    crearPersona,
};
const routerPersonas = require("express").Router();
const { verPersonas, crearPersona, eliminarPersona, editarPersona, verPersona } = require("../controllers/personas");

routerPersonas.get("/", verPersonas);
routerPersonas.post("/", crearPersona);
routerPersonas.put("/:id", editarPersona);
routerPersonas.delete("/:id", eliminarPersona);
routerPersonas.get("/:id", verPersona);

module.exports = routerPersonas;

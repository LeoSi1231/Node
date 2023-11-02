const Nombre = document.querySelector("#nombre");
const Apellido = document.querySelector("#apellido");
const Edad = document.querySelector("#edad");
const btnBorrar = document.querySelector(".btn-borrar");
const idpersona = localStorage.getItem("idpersona");
const btnVolver = document.querySelector(".btn-volver");
const btnEditar = document.querySelector(".btn-editar");

fetch(`http://localhost:3000/personas/${idpersona}`).then((res) => {
    return res.json();
}).then((data) => {
    
    Nombre.innerHTML = data.nombre;
    Apellido.innerHTML = data.apellido;
    Edad.innerHTML = data.edad;
})

btnBorrar.addEventListener("click", function () {
    fetch(`http://localhost:3000/personas/${idpersona}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        } 
    });
    window.location.replace = "./index.html";
    
})

btnVolver.addEventListener("click", function () {
    window.location.replace = "./index.html";
})

btnEditar.addEventListener("click", function () {
    window.location.replace = "./editar-persona.html";
})
const inputNombre = document.querySelector("#input-nombre");
const inputApellido = document.querySelector("#input-apellido");
const inputEdad = document.querySelector("#input-edad");
const btnEnviar = document.querySelector(".btn-enviar");

btnEnviar.addEventListener("click", function () {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const edad = inputEdad.value;
  
    let cuerpoPeticion = {
      nombre: nombre,
      apellido: apellido,
      edad: edad
    };
  
    fetch("http://localhost:3000/personas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cuerpoPeticion)
    })
      .then((res) => {
        window.location.replace = "./index.html";
      });
  });
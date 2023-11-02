const inputNombre = document.querySelector("#input-nombre");
const inputApellido = document.querySelector("#input-apellido");
const inputEdad = document.querySelector("#input-edad");
const btnGuardar = document.querySelector(".btn-guardar");
const idpersona = localStorage.getItem("idpersona");

async function cargarPersona() {
    let persona;
    await fetch(`http://localhost:3000/personas/${idpersona}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        persona = data;
      });
    return persona;
}

function cargarFormulario() {
  cargarPersona().then((persona) => {
    inputNombre.value = persona.nombre;
    inputApellido.value = persona.apellido;
    inputEdad.value = persona.edad;
  })
} 

function editarPersona(persona) {
    inputNombre.value = persona.nombre;
    inputApellido.value = persona.apellido;
    inputEdad.value = persona.edad;
  }

  cargarPersona();

btnGuardar.addEventListener("click", function () {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const edad = inputEdad.value;

    let cuerpoPeticion = {
        nombre,
        apellido,
        edad
    }

    fetch(`http://localhost:3000/personas/${idpersona}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cuerpoPeticion)
    }).then((res) => {
        window.location.replace = "./ver-persona.html";
      });
  });

cargarFormulario();

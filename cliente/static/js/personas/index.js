const BtnVer = document.querySelectorAll(".btn-ver");
const tbodyPersonas = document.querySelector("#tbody-personas");
const BtnCrear = document.querySelector("#crear-persona");


async function cargarPersonas() {
    let personas;
    await fetch("http://localhost:3000/personas")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        personas = data;
      });
    return personas;
  }

  function renderizarTabla() {
    tbodyPersonas.innerHTML = "";
  cargarPersonas().then((personas) => {
    for (let i = 0; i < personas.length; i++) {
      tbodyPersonas.innerHTML +=
        `<tr>
          <td>${personas[i].nombre}</td>
          <td>${personas[i].apellido}</td>
          <td>${personas[i].edad}</td>
          <td>
            <button class="btn-borrar">Borrar</button>
            <a href="./ver-persona.html"><button class="btn-ver">Ver</button></a>
          </td>
        </tr>`;
    }

    const btnBorrar = document.querySelectorAll(".btn-borrar");
    for (let i = 0; i < btnBorrar.length; i++) {
      btnBorrar[i].addEventListener("click", function () {
        console.log("Holaaaa");
        fetch(`http://localhost:3000/personas/${personas[i]._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          location.reload();
        })
        });
      }

      btnVer(personas)
  })}
    
  function btnVer(personas) {
    const btnVer = document.querySelectorAll(".btn-ver");
    for (let i = 0; i <btnVer.length; i++) {
      btnVer[i].addEventListener("click", function () {
        localStorage.setItem("idpersona", personas[i]._id);
      });
    }
  }

  renderizarTabla();
  

    
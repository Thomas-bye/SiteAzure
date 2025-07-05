// script.js
document.addEventListener("DOMContentLoaded", function() {
    const sesionesContainer = document.querySelector(".sesiones");

    // Datos de las sesiones con rutas corregidas
    const sesionesData = [
        { imagen: "img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/r/personal/s01301a_ms_upla_edu_pe/Documents/Parcial_1.docx?d=w013d8a550ae6401e9371f16b6f3009ff&csf=1&web=1&e=FHP9qD", archivo: "tareas/Parcial_1.pdf" },
        { imagen: "img_parcial.png", enlace: "https://universidadperuanalosand804-my-sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EUGDECtHs9BHsxSVp45ny6cBoL7aV_EDsc5MSV0CmBOwCg?e=MFjMzV", archivo: "tareas/Parcial_2.pdf" },
        { imagen: "img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EUGDECtHs9BHsxSVp45ny6cBoL7aV_EDsc5MSV0CmBOwCg?e=MFjMzV", archivo: "tareas/Parcial_3.pdf" },
        { imagen: "img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/ESI6GTaR0v1No_dEWp2AIooB0sVwqFmN6uD9Vld7MdhgWw?e=lfzwMz", archivo: "tareas/Parcial_4.pdf" },
        { imagen: "img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EWfnG8_HVW1ClAEuSddhwgsBjLoSHiXFlAjw82m2CbHUxA?e=EAtbPw", archivo: "tareas/Parcial_5.pdf" },
        { imagen: "img_parcial.png", enlace: "https://universidadperuanalosand804-my.sharepoint.com/:w:/g/personal/s01301a_ms_upla_edu_pe/EW3WtpFERQ1GtLEoqlAQTvUBolP3ggo1lolh06DSdOehgg?e=Qe21oO", archivo: "tareas/Parcial_6.pdf" }
    ];

    // Generar sesiones dinámicamente
    sesionesData.forEach((sesion, index) => {
        let sesionDiv = document.createElement("div");
        sesionDiv.classList.add("sesion");
        sesionDiv.innerHTML = `
            <p>Sesión ${index + 1}</p>
            <a href="${sesion.enlace}" target="_blank" rel="noopener noreferrer">
                <img src="${sesion.imagen}" alt="Documento">
            </a>
            <a href="${sesion.archivo}" download class="boton-descarga">Descargar PDF</a>
        `;
        sesionesContainer.appendChild(sesionDiv);
    });
});
//contenedro gestion de tareas
let tareas = [];

  const formulario = document.getElementById("formulario");
  const contenedor = document.getElementById("gestion");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const imagen = document.getElementById("imagen").value;
    const titulo = document.getElementById("titulo").value;
    const link = document.getElementById("link").value;
    const indice = document.getElementById("indice").value;

    const nuevaTarea = { imagen, titulo, link };

    if (indice === "") {
      tareas.push(nuevaTarea); // Crear
    } else {
      tareas[indice] = nuevaTarea; // Editar
      document.getElementById("indice").value = "";
    }

    mostrarTareas();
    formulario.reset();
  });

  function mostrarTareas() {
    contenedor.innerHTML = "";
    tareas.forEach((tarea, index) => {
      const div = document.createElement("div");
      div.className = "tarea";
      div.innerHTML = `
        <img src="${tarea.imagen}" alt="${tarea.titulo}">
        <p>${tarea.titulo.toUpperCase()}</p>
        <a href="${tarea.link}" target="_blank">Ver</a>
        <button class="editar" onclick="editarTarea(${index})">Editar</button>
        <button class="eliminar" onclick="eliminarTarea(${index})">Eliminar</button>
      `;
      contenedor.appendChild(div);
    });
  }

  function editarTarea(index) {
    const tarea = tareas[index];
    document.getElementById("imagen").value = tarea.imagen;
    document.getElementById("titulo").value = tarea.titulo;
    document.getElementById("link").value = tarea.link;
    document.getElementById("indice").value = index;
  }

  function eliminarTarea(index) {
    if (confirm("¿Estás seguro de eliminar esta tarea?")) {
      tareas.splice(index, 1);
      mostrarTareas();
    }
  }

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const sesionesContainer = document.querySelector(".sesiones");

    for (let i = 1; i <= 6; i++) {
        let sesionDiv = document.createElement("div");
        sesionDiv.classList.add("sesion");

        sesionDiv.innerHTML = `
            <h2>Sesión ${i}</h2>
            <img src="imagen${i}.jpg" alt="Imagen de la sesión ${i}">
            <a href="trabajo${i}.html" class="boton">Visualizar</a>
            <a href="documento${i}.pdf" download class="boton">Descargar PDF</a>
        `;

        sesionesContainer.appendChild(sesionDiv);
    }
});

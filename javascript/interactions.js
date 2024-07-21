/* Menu */
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const navBar = document.querySelector(".navBar");
  const cerrar = document.querySelector(".cerrar");
  const textP = document.querySelector(".textP");

  menu.addEventListener("click", function () {
    navBar.style.display = "block";
    textP.style.display = "none";
  });

  cerrar.addEventListener("click", function () {
    navBar.style.display = "none";
    textP.style.display = "flex";
  });
});


/* Mostrar proyectos */
function mostrarImg(id){
  var imgPoput = document.getElementById(id);
  imgPoput.classList.add('mostrar')
}

function ocultarImg(id) {
  var imgPopup = document.getElementById(id);
  imgPopup.classList.remove('mostrar')
}


/* PDF CV */
document.addEventListener('DOMContentLoaded', function() {
  const botonPDF = document.getElementById('botonPDF');

  botonPDF.addEventListener('click', function() {
      abrirPDF('../CV-SabrinaBidal.pdf');
  });

  function abrirPDF(url) {
      window.open(url, '_blank');
  }
});

/* Open to work */
document.getElementById("copyButton").addEventListener("click", function() {
  // Obtener el correo electrónico desde el atributo data-email
  const email = this.getAttribute("data-email");
  
  // Crear un elemento de texto temporal
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);

  // Seleccionar el texto del elemento temporal
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Para móviles

  // Copiar el texto al portapapeles
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(tempInput);

  // Cambiar el contenido del tooltip
  const tooltip = this.querySelector(".tooltip");
  tooltip.textContent = "copied to clipboard!";
  
  // Mostrar el tooltip
  tooltip.classList.add("show");
  
  // Ocultar el tooltip después de 2 segundos
  setTimeout(() => {
    tooltip.classList.remove("show");
    tooltip.textContent = email; 
  }, 2000);
});


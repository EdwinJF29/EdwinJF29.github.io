function mostrarInterfaz() {
    var interfaz = document.getElementById("interfaz");
    interfaz.style.display = "block";
  
    var titulo = document.getElementById("titulo");
    titulo.classList.add("oculto");
  
    var parrafos = document.getElementsByClassName("wa");
    for (var i = 0; i < parrafos.length; i++) {
      parrafos[i].classList.add("oculto");
    }
  
    var botonAbrir = document.getElementById("botonAbrir");
    botonAbrir.classList.add("oculto");
  
    var body = document.body;
    body.classList.add("sin-fondo");

    var interfaz = document.getElementById("interfaz");
  interfaz.classList.toggle("mostrar");
}
  
function generar() {
  window.addEventListener("click", function (event) {
    if (event.target.id === "boton") {
      const id = document.getElementById("id").value;
      const producto = document.getElementById("producto").value;
      const escribir = "<div> <p>document</p></div>";
    }
  });
}
//meter dentro de la funcion anonima ("click", function (event) {event.preventdefault()})

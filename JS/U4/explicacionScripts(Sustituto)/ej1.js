function generar() {
  window.addEventListener("click", function (event) {
    if (event.target.id === "boton") {
      const id = document.getElementById("id").value;
      const producto = document.getElementById("producto").value;
      const parrafo = document.getElementById("producto-mostrado");
      parrafo.innerHTML += `<p id="${id}"> ${producto} </p>`;
    }
  });
}
//meter dentro de la funcion anonima ("click", function (event) {event.preventdefault()})

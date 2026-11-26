window.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.id === "boton") {
    const id = document.getElementById("id").value;
    const producto = document.getElementById("producto").value;

    const parrafo = document.getElementById("producto-mostrado");
    texto = `<li id="${id}"> ${producto} </li>`;
    //console.log(texto);
    parrafo.innerHTML += texto;
  }
});

//meter dentro de la funcion anonima ("click", function (event) {event.preventdefault()})
// '<p>' +variable+ '</p>'

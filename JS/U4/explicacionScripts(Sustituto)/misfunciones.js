function actualizarNombre() {
  const nombre = document.getElementById("nombre").value;
  document.getElementById("nombre-mostrado").innerText = nombre; //no poner HTML
  //console.log(nombre);
}

//funcion anonima
window.addEventListener("click", function (event) {
  //function ()     o     function (event) pasa saber que elemento lo ha ejecutado
  if (event.target.id === "boton") {
    actualizarNombre(event);
    //event.preventDefault(): quew no se pierdan datos al recargar
  }
});

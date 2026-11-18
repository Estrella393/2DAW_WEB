"use strict";

// ---------------------------------------------------------------------------
// FUNCIÓN DE APOYO (ya hecha, no la modifiques)
// Inserta un texto HTML dentro del elemento indicado por su selector CSS.
// Cómo funciona por dentro se estudiará en las unidades de objetos predefinidos
// y DOM. Por ahora, úsala como una "caja negra":
//   mostrar("#catalogo", "<p>Hola</p>");
// ---------------------------------------------------------------------------
function mostrar(selector, html) {//introduce código HTML dentro de un elemento de la página
  document.querySelector(selector).innerHTML = html;
}

// ---------------------------------------------------------------------------
// R1 a R7: funciones de cálculo (no deben usar mostrar ni console.log)
// ---------------------------------------------------------------------------

// R1
//si hay valoraciones devuelve la media de estas y si no un null
function valoracionMedia(libro) {
  if (libro.valoraciones.length >0){
      const suma=libro.valoraciones.reduce((suma,numero)=>suma+numero,0);//accedo a la propiedad valoraciones y sumo las valoraciones
      const resultado= suma/libro.valoraciones.length;
      return resultado.toFixed(1); 
  }
  else{
    return null//si no hay valoraciones, devuelvo null
  }
}

// R2
//si el atributo prestado es falso significa que estan disponibles
function librosDisponibles(libros) {
  const resultado=libros.filter(libro => !libro.prestado);//NO libro.!prestado
  return resultado;
}

// R3
//devuelvo los libros entre dos fechas si los datos son validos 
function librosEntre(libros, desde, hasta) {
  const inicio = Number(desde);
  const fin = Number(hasta);//paso a number por si entra un string
   if (isNaN(inicio) || isNaN(fin) || inicio > fin) {// Si alguno no es un número válido, o desde es mayor que hasta, devuelve un array vacío. 
        return [];
    }
  const resultado=libros.filter(libro => libro.anio >= inicio && libro.anio <= fin);
  return resultado;
}

// R4
//devulve los generos ordenados
function generos(libros) {
  //saco los generos con un map, quito duplicados con un set y vulevo a pasar a array para ordenar
  const generos = libros.map(libro => libro.genero);//saco los genrros
  const sinDuplicar = new Set(generos);
  const resultado = [...sinDuplicar];//o const resultado = Array.from(generosUnicos);
  return resultado.sort();
}

// R5
//devuelvo un Map con todos los autores y su numero de libros
function librosPorAutor(libros) {
  return libros.reduce((mapa, libro) => {
        if (mapa.has(libro.autor)) {
            mapa.set(libro.autor, mapa.get(libro.autor) + 1);//si ya tiene el nombre lo sumo
        } else {
            mapa.set(libro.autor, 1);//creo una posicion con (nombre,1)
        }
        return mapa;
    }, new Map());//el valor inicial en este caso es la declaracion del Map
/*nota estructura reduce:
array.reduce((acumulador, elemento) => {
    // Operaciones
    return acumulador;
}, valorInicial); */
}

// R6
//devulve un array ordenado segun la valoracion
function ranking(libros, n = 3) {
  const nuevoLibros = [...libros];//no vale const resultado = libros; pq apuntaria al mismo array
  const valorados = nuevoLibros.filter(libro => valoracionMedia(libro) !== null);//quitamos libros sin valoraciones
  valorados.sort((libro1, libro2) => {//sort() compara los elementos de dos en dos automáticamente
    const diferencia = valoracionMedia(libro2)-valoracionMedia(libro1);//utilizo la funciona anterior
  if (diferencia === 0) {//si don iguales, comparamos titulo con localeCompare
        return libro1.titulo.localeCompare(libro2.titulo);
  }
  return diferencia;
});
return valorados.slice(0, n);  //una vez ordenados todos, solo devolvemos los n primeros  
}

// R7
//concatenamos array con todas las valoraciones para sumarlo y sacar la media
function resumen(libros) {
  const total = libros.length;
  const prestados = libros.filter(libro => libro.prestado).length;
  const disponibles = libros.filter(libro => !libro.prestado).length;
  //este reduce() no suma las valoraciones, solo concatena los arrays
  const todasValoraciones = libros.reduce((acumulador, libro) => [...acumulador, ...libro.valoraciones],[]);//otro array como valor inicial
  const suma = todasValoraciones.reduce((acumulador, nota) => acumulador + nota, 0);//aqui si sumo
  const media = (suma /todasValoraciones.length).toFixed(1);

  const anio = libros.map(libro => libro.anio);//extraemos años con map
  const min = Math.min(...anio);//Math.min(anios); no  funciona pq lo pasa entero
  const masAntiguo = libros.find(libro => libro.anio === min).titulo;

  return {
    total,
    prestados,
    disponibles,
    media,//no compruebo que me devuelva Number
    masAntiguo
  };
}

// ---------------------------------------------------------------------------
// R8: funciones que generan HTML (devuelven un string)
// ---------------------------------------------------------------------------
//hacer una clase prestado que tenga los libros prestados
function tablaLibros(libros) {
  const fila= `
    <table>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Género</th>
          <th>Año</th>
          <th>Estado</th>
          <th>Valoración</th>
        </tr>
        ${libros.map(libro => `
          <tr class="${libro.prestado? "prestado":""}">
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.genero}</td>
            <td>${libro.anio}</td>
            <td >${libro.prestado ? "Prestado":"Disponible"}</td>
            <td>${valoracionMedia(libro)??"Sin valorar"}</td> 
          </tr>`).join("")}
    </table>
  `;//en tr para que sea para todas las filas de prestados, si esta prestado se aplica y si no no tiene nombre de clase
  //pongp  "Sin valorar" para que no devuelva null  y join porque si no devulve un array
  return fila;
}

function resumenMostrar(libros) {
  const datos = resumen(libros);//en este caso guardo la variable porque devuleve mas de una cosa
  const fila = `
    <div>
      <p>Total de libros: ${datos.total}</p>
      <p>Prestados: ${datos.prestados}</p>
      <p>Disponibles: ${datos.disponibles}</p>
      <p>Media global: ${datos.media}</p>
      <p>Libro más antiguo: ${datos.masAntiguo}</p>
    </div>`;
  return fila;
}


function generosMostrar(libros) {
  const fila= `
    <p>
      ${generos(libros).map(genero => `<p>${genero}</p>`).join("")}
    </p>`;//llama a tu función generos() y obtiene los géneros sin repetir en un array, map recorre ese array
    //lo pasa con las etiquetas html y lo junta con join. Es lo mismo en todas las funciones
    return fila;
}

function mejorValorados(libros) {
  const fila= `
    <div>
      ${ranking(libros).map(libro => `<p>${libro.titulo} tiene una media 
        de ${valoracionMedia(libro)}</p>`).join("")}
    </div>`;
    return fila
}

function librosPorAutorMostrar(libros) {
  return `
    <div>
      ${[...librosPorAutor(libros)].map(([autor, cantidad]) => `<p>${autor} ha escrito 
      ${cantidad} libros </p>`).join("")}
    </div> `;//aqui primero lo paso a parejas de arrays(dentro de un array grande) para poder usar map
}//igual que:
/*.map(pareja => {
  const autor = pareja[0];
  const cantidad = pareja[1];
  return `<p>${autor} ha escrito ${cantidad} libros</p>`;
}) */

// ---------------------------------------------------------------------------
// Programa principal
// ---------------------------------------------------------------------------
mostrar("#catalogo", tablaLibros(LIBROS));
// ...
mostrar("#resumen", resumenMostrar(LIBROS));
mostrar("#generos", generosMostrar(LIBROS));
mostrar("#ranking", mejorValorados(LIBROS));
mostrar("#autores", librosPorAutorMostrar(LIBROS));

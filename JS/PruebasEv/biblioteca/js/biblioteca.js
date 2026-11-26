// js/biblioteca.js
import { Libro } from "./libro.js";

export class Biblioteca {
   
   constructor(libros=[]) {
    this.libros=libros;
}

// métodos de RF2 y RF3
/**
 * Añade un libro al catálogo
 * @param {Libro} libro que quieres agregar
 * @returns {void}
 */
  agregar(libro){
    this.libros.push(libro);
  }
/**
 * Añade un libros a partir de leer un texto y utilizando el método agregar de antes
 * @param {string} texto que quieres agregar
 * @returns {void}
 */
  cargarDesdeTexto(texto){
    //formo array con los libros
    const cadaLibro = texto.split("\n");
    const campos=cadaLibro.map(libro => libro.split(";")) ;//campos es un array que contiene un array por cada libro

    for(let i=0; i<campos.length; i++){//length empieza desde 1, no poner =
        const valorDisponible = campos[i][5].trim().toLowerCase() == "si" ? true : false;
        //o tambien(ya que === devuleve automaticamente True y False):const valorDisponible = c[5].trim().toLowerCase() === "si";
        this.agregar(new Libro(campos[i][0].trim(),campos[i][1].trim(),Number(campos[i][2].trim()),Number(campos[i][3].trim()),
        campos[i][4].trim(), valorDisponible)) ; 
    }
  }


/**
 * Devuelve libros cuyo título o autor contienen el texto, sin distinguir mayúsculas ni minúsculas
 * @param {string} texto con el que quieres buscar
 * @returns {Libros[]} copia del array con el resultado
 */
  buscar(texto){
    const textoNormalizado= texto.toLowerCase();
    //no es necesario, ya se guerda con filter: const arrayContenedor=[]
    return this.libros.filter(libro=>libro.autor.toLowerCase().includes(textoNormalizado)||libro.titulo.toLowerCase().includes(textoNormalizado));
  }

/**
 * Devuelve libros que pertenezcan a ese género
 * @param {string} genero con el que quieres buscar
 * @returns {Libros[]} copia del array con el resultado
 */
  filtrarPorGenero(genero){//filter, map y slice NO modifican el array
    const resultado=this.libros.filter(libro => libro.genero.toLowerCase()==genero.toLowerCase());
    return resultado;
  }

/**
 * si pone true se devuelven los libros disponibles y si pone false los prestados
 * @param {boolean} genero con el que quieres buscar
 * @returns {Libros[]} copia del array con el resultado
 */
  filtrarPorDisponibilidad(disponible){
        //si el atributo prestado es falso significa que estan disponibles
        if(disponible){
            return this.libros.filter(libro => libro.disponible);
        }
        else{
            return this.libros.filter(libro => !libro.disponible);//NO libro.!prestado
        }
        //o simplemente:return this.libros.filter(libro => libro.disponible === disponible);
  }

  /**
 * Ordenar por campo en orden astendente o destendente sin modificar array original.
 *  Y tiene que valer para string(localCompare) o numeros
 * @param {string} campo con el que quieres buscar
 * @param {boolean} ascendente define el orden
 * @returns {Libro[]} nuevaBiblio: copia del array de Libro con el resultado
 */
    ordenarPor(campo, ascendente) {
        const nuevaBiblio = [...this.libros];//no vale const nuevaBiblio = this.libros; pq apuntaria al mismo array

        if (campo === "titulo" || campo === "autor") {
            nuevaBiblio.sort((libro1, libro2) => libro1[campo].localeCompare(libro2[campo]));
        } 
        if (campo === "anio" || campo === "paginas") {
            nuevaBiblio.sort((libro1, libro2) => libro1[campo] - libro2[campo]);
        } 
        if (!ascendente) {
             nuevaBiblio.reverse();
        }
        return nuevaBiblio;
    }


  /**
 * Sacar una lista de los géneros
 * @returns {Set} un set con el resultado
 */    
  generos(){
    //saco los generos con un map, quito duplicados con un set
    const generos = this.libros.map(libro => libro.genero);//saco los genrros
    const sinDuplicar = new Set(generos);
    return sinDuplicar;
  }

//RF3
  /**
 * Hace un objeto con: total de libros, disponibles, prestados,
 *  media de páginas (redondeada con Math), libro más antiguo 
 * y número de libros por género (con un Map)
 * @returns {Object} un set con el resultado
 */  
estadisticas(){
  const estadisticas = new Object();
  estadisticas.total = this.libros.length;
  estadisticas.disponibles = this.filtrarPorDisponibilidad(true).length;//this tambien en los métodos de clase(al igual que los atributos)
  estadisticas.prestados = this.filtrarPorDisponibilidad(false).length;
  estadisticas.media =Math.round(this.libros.reduce((cont, libro)=>cont+libro.paginas, 0) / this.libros.length);
  estadisticas.masAntiguo =Math.min(...this.libros.map(libro => libro.anio));//que utilizar el spread para que "separe" los elementos del array
  //o con reduce:  this.libros.reduce((min, libro)=>Math.min(min, libro.anio), this.libros[0].anio);
  const mapa = new Map();
  for (const libro of this.libros) {
      mapa.set(libro.genero, (mapa.get(libro.genero)??0) + 1);//si es undefined lo inicilaiza a 0, sino suma
  }
  estadisticas.porGenero= mapa;
  return estadisticas;
}

//RF4
  /**Genera seccion con título y:
 * Cada tarjeta muestra título, autor, año, páginas, género y estado. Si la lista está vacía, 
 * muestra «No hay libros en esta sección»
 * @returns {Object} un set con el resultado
 */
pintarSeccion(titulo, lista) {//introduce código HTML dentro de un elemento de la página
  let tarjetas = "";
  if (lista.length === 0) {
    tarjetas="<p>No hay libros en esta sección</p>";
  } else {
    for (const libro of lista) {//tarjeta para estilo generales y disponible/prestado para cambiar el borde según el estado 
      //Una etiqueta «Prestado» solo cuando este disponoble
      //Tarjetas de cada sección en rejilla 
      tarjetas += `<article class="tarjeta ${libro.disponible?"disponible" : "noDisponible"}">

        ${!libro.disponible ? '<span class="prestado">Prestado</span>' : ''}

          <h3>${libro.titulo}</h3>
          <p>Autor: ${libro.autor}</p>
          <p>Año: ${libro.anio}</p>
          <p>Páginas: ${libro.paginas}</p>
          <p>Género: ${libro.genero}</p>
          <p >Estado : ${libro.disponible? "Esta disponible" : "Esta prestado"}</p>
        </article>`;
    }
  }
  document.querySelector("#contenedor").innerHTML+=`<section>
  <h2>${titulo}</h2>
  <div class="contenedor-tarjetas">
  ${tarjetas}
  </div>
  </section>`;
  //NO =: al llamar a la funcion dos veces me borra el cintenido anterior 
}

pintarIndice() {
  //todos los elementos <section> de la página
  const secciones = document.querySelectorAll("section");
  let enlaces = "";
  secciones.forEach((seccion, i) => {
    seccion.id = i;//hago su id con la propiedad HTML .id
    const titulo = seccion.querySelector("h2").innerText;//guardo titulo
    document.querySelector("#indice").innerHTML += `<a href="#${i}">${titulo}</a>`;
  });
}



}
export const catalogo = new Biblioteca();
catalogo.agregar(new Libro("Niebla", "Miguel de Unamuno", 1914, 280, "novela", true));
catalogo.agregar(new Libro("El Quijote", "Miguel de Cervantes", 1605, 1250, "novela", true));
catalogo.agregar(new Libro("La casa de Bernarda Alba", "Federico García Lorca", 1936, 120, "teatro", false));
catalogo.agregar(new Libro("Odisea", "Homero", -700, 456, "poesía", true));
catalogo.agregar(new Libro("Historia de dos ciudades", "Charles Dickens", 1859, 488, "novela", false));
catalogo.agregar(new Libro("El principito", "Antoine de Saint-Exupéry", 1943, 96, "novela", true));
catalogo.agregar(new Libro("El diario de Ana Frank", "Ana Frank", 1947, 400, "biografía", false));
catalogo.agregar(new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954, 1200, "fantasía", true));
// ... resto de libros y cargarDesdeTexto()
catalogo.cargarDesdeTexto(`Las aventuras de Alicia en el país de las maravillas;Lewis Carroll;1865;200;fantasía;si
Sueño en el pabellón rojo;Cao Xueqin;1791;2500;novela;no
Cien años de soledad;Gabriel García Márquez;1967;512;novela;si
El guardián entre el centeno;J.D. Salinger;1951;280;novela;no`);

/*ARRAY INICIAL DE LIBROS:
const biblioteca = [
  new Libro("El Quijote", "Miguel de Cervantes", 1605, 1250, "novela", true),
  new Libro("La casa de Bernarda Alba", "Federico García Lorca", 1936, 120, "teatro", false),
  new Libro("Niebla", "Miguel de Unamuno", 1914, 280, "novela", true),
  new Libro("Odisea", "Homero", -700, 456, "poesía", true),
  new Libro("Historia de dos ciudades", "Charles Dickens", 1859, 488, "novela", false),
  new Libro("El principito", "Antoine de Saint-Exupéry", 1943, 96, "novela", true),
  new Libro("El diario de Ana Frank", "Ana Frank", 1947, 400, "biografía", false),
  new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954, 1200, "fantasía", true),
  new Libro("Las aventuras de Alicia en el país de las maravillas", "Lewis Carroll", 1865, 200, "fantasía", true),
  new Libro("Sueño en el pabellón rojo", "Cao Xueqin", 1791, 2500, "novela", false),
  new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, 512, "novela", true),
  new Libro("El guardián entre el centeno", "J.D. Salinger", 1951, 280, "novela", false),
];*/
   
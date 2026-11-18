//R1
//muestra mensaje cuando la condicion es falsa
console.assert(valoracionMedia(LIBROS[2])===null,`La media de "${LIBROS[0].titulo}" no es null, es ${valoracionMedia(LIBROS[0])}`);
// Caso limite
console.assert(valoracionMedia({ valoraciones: [] }) === null,"No es null");


//R2
console.assert((librosDisponibles(LIBROS)).length === 8,"No hay 8 libros disponibles");

//R3
console.assert(librosEntre(LIBROS,"1950","1960").length === 4,"No se han publicado 4 libros");//.lenght pq devuelvo un array
console.assert(librosEntre(LIBROS,"abc",2000).length === 0,"Deberia devolver un array vacio");

//R4
console.assert(generos(LIBROS).length === 5,"No hay 5 géneros");
console.assert(generos(LIBROS)[0]=== "Ciencia ficción","El primer género no es Ciencia ficción");

//R5
console.assert(librosPorAutor(LIBROS).get("Isaac Asimov")=== 2,"Isaac Asimov no tiene 2 libros");//busca en el map que devuelve cuantos libros tiene solo Isaac

//R6
console.assert((ranking(LIBROS)[0].titulo === "Matilda") && (valoracionMedia(ranking(LIBROS)[0])) == 4.8,"El primer libro no es Matilda");

//R7
console.assert( resumen(LIBROS).total === 13 && resumen(LIBROS).prestados === 5 &&
  resumen(LIBROS).disponibles === 8 && resumen(LIBROS).media== 4.4 &&
  resumen(LIBROS).masAntiguo === "La Celestina","Algun dato no es correcto");


console.table(librosDisponibles(LIBROS));

ranking(LIBROS);
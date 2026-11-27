// js/app.js
import { catalogo } from "./biblioteca.js";
import { Biblioteca } from "./biblioteca.js"; //para crear objetos Biblioteca

//RF6 — Simulación de préstamos.

//Prestar3
console.log("Préstamo 1:", catalogo.libros[0].prestar());
console.log("Préstamo 2:", catalogo.libros[1].prestar());
console.log("Préstamo 3:", catalogo.libros[3].prestar());
//Devolver 1
console.log("Devolución:", catalogo.libros[0].devolver());
//intentar prestar uno que ya estaba prestado
console.log("Préstamo repetido:", catalogo.libros[1].prestar());

console.table(catalogo); /*pide especificamente table (apartado obligatorio) */

//RF5 — Vistas del catálogo.

catalogo.pintarSeccion(
  "Catálogo completo",
  catalogo.ordenarPor("titulo", true),
);

catalogo.pintarSeccion(
  "Libros disponibles",
  catalogo.filtrarPorDisponibilidad(true),
);
catalogo.pintarSeccion(
  "Libros prestados",
  catalogo.filtrarPorDisponibilidad(false),
);
//Una sección por género, generadas con un bucle sobre generos()
for (const genero of catalogo.generos()) {
  catalogo.pintarSeccion(
    `Género: ${genero}`,
    catalogo.filtrarPorGenero(genero),
  );
}

catalogo.pintarSeccion(
  "Los 5 libros más antiguos",
  catalogo.ordenarPor("anio", true).slice(0, 5),
);

//creo catalogos porque los metodos son de biblioteca, no se arrays
const disponibles = catalogo.filtrarPorDisponibilidad(true);
const catalogoTempl = new Biblioteca(disponibles);
const novelasDisponibles = catalogoTempl.filtrarPorGenero("novela");
const catalogoTemp2 = new Biblioteca(novelasDisponibles);
const novelasOrdenadas = catalogoTemp2.ordenarPor("paginas", true);
catalogo.pintarSeccion(
  "Novelas disponibles ordenadas por páginas",
  novelasOrdenadas,
);

const TEXTO_BUSQUEDA = "de";
catalogo.pintarSeccion(
  `Resultados que contengan "${TEXTO_BUSQUEDA}" (en autor o título)`,
  catalogo.buscar(TEXTO_BUSQUEDA),
);

//RF7
catalogo.pintarIndice();

//mostrar estadisticas
catalogo.mostrarEstatisticas();

// js/app.js
import { catalogo } from "./biblioteca.js";


catalogo.pintarSeccion("Catálogo completo", catalogo.ordenarPor("titulo", true));

catalogo.pintarSeccion("Libros disponibles", catalogo.filtrarPorDisponibilidad(true));
catalogo.pintarSeccion("Libros prestados", catalogo.filtrarPorDisponibilidad(false));
//Una sección por género, generadas con un bucle sobre generos()
for (const genero of catalogo.generos()) {
    catalogo.pintarSeccion(`Género: ${genero}`, catalogo.filtrarPorGenero(genero));
}

catalogo.pintarSeccion("Los 5 libros más antiguos", catalogo.ordenarPor("anio", true).slice(0, 5));

//creo catalogos porque los metodos son de biblioteca, no se arrays
const disponibles = catalogo.filtrarPorDisponibilidad(true);
const catalogoTemporal = new Biblioteca(disponibles);
const novelasDisponibles = catalogoTemporal.filtrarPorGenero("novela");
const catalogoTemporal2 = new Biblioteca(novelasDisponibles);
const novelasOrdenadas = catalogoTemporal2.ordenarPor("paginas", true);
catalogo.pintarSeccion(
    "Novelas disponibles ordenadas por páginas",
    novelasOrdenadas
);

const TEXTO_BUSQUEDA = "de";
catalogo.pintarSeccion(`Resultados ${TEXTO_BUSQUEDA}`, catalogo.buscar(TEXTO_BUSQUEDA))
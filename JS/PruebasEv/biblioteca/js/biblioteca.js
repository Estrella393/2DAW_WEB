// js/biblioteca.js
import { Libro } from "./libro.js";

export class Biblioteca {
    //Encapsula el array de libros
    constructor() {
        this.libros = [];
    }
  // métodos de RF2 y RF3
  agregar(libro){

  }
  buscar(texto){

  }
  filtrarPorGenero(genero){

  }
  //si pone true se ponen los libros disponibles y si pone false los prestados
  filtrarPorDisponibilidad(disponible){
        //si el atributo prestado es falso significa que estan disponibles
        if(disponible==true){
            const resultado=libros.filter(libro => !libro.prestado);//NO libro.!prestado
            return resultado;
        }
        else{
            const resultado=libros.filter(libro => libro.prestado);//NO libro.!prestado
            return resultado;
        }
  }
  //no modificar array original
  ordenarPor(campo, ascendente){

  }
  generos(){
    //saco los generos con un map, quito duplicados con un set
    const generos = libros.map(libro => libro.genero);//saco los genrros
    const sinDuplicar = new Set(generos);
    return sinDuplicar;
  }
}

export const catalogo = new Biblioteca();
catalogo.agregar(new Libro("Niebla", "Miguel de Unamuno", 1914, 280, "novela"));
// ... resto de libros y cargarDesdeTexto()
   
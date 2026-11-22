// js/libro.js
export class Libro {
  constructor(titulo, autor, anio, paginas, genero, disponible = true) {
    // ...
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.paginas = paginas;
    this.genero=genero;
    this.disponible = disponible;
  }
  //si esta disponible se presta y se cambia el estado, si no esta disponible se devuleve false
  prestar(libro){
    if (libro.disponible==true){
        libro.disponible=false;
    }
    else{
        return false;
    }
  }
  //lo marca como disponible; mismo comportamiento si ya lo estaba
  devolver(libro){
    if (libro.disponible==false){
        libro.disponible=true;
    }
    else{
        return false;
    }
  }
  //devuelve los años desde su publicación, calculados con el objeto Date 
  antiguedad(libro){
        return new Date().getFullYear()-libro.anio;
  }

  resumen() {
    return `${this.titulo} — ${this.autor} (${this.anio})`;
  }







}

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
];
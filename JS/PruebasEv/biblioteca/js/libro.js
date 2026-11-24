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
  prestar(){
    if (this.libro.disponible==true){
        this.libro.disponible=false;
        return true;
    }
    else{
        return false;
    }
  }
  //lo marca como disponible; mismo comportamiento si ya lo estaba
  devolver(){
    if (this.libro.disponible==false){
        this.libro.disponible=true;
        return true;
    }
    else{
        return false;
    }
  }
  //devuelve los años desde su publicación, calculados con el objeto Date 
  antiguedad(){
        return new Date().getFullYear()-this.libro.anio;
  }

  resumen() {
    return `${this.titulo} — ${this.autor} (${this.anio})`;
  }







}


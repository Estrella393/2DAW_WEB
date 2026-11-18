class Ordenador {
  constructor(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
    if (typeof marca !== "string" || marca.trim() === "") {
      throw new Error("La marca es obligatoria");
    }
    if (typeof modelo !== "string" || modelo.trim() === "") {
      throw new Error("El modelo es obligatorio");
    }

    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;
  }

  toString() {
    return `${this.marca} ${this.modelo} - RAM ${this.ram} GB, Disco: ${this.disco} GB, Pantalla: ${this.pulgadas} pulgadas`;
  }
  //hcaer metodo precio que calcule el precio 200 + ram × 10 + disco × 0,1 + pulgadas × 5.
  precio() {
    return (200 + this.ram * 10 + this.disco * 0, 1 + this.pulgadas * 5);
  }
}

class Portatil extends Ordenador {
  constructor(
    marca,
    modelo,
    ram = 4,
    disco = 256,
    pulgadas = 12,
    autonomia = 4,
  ) {
    super(marca, modelo, ram, disco, pulgadas);
    this.autonomia = autonomia;
  }

  toString() {
    return `${super.toString()}, Autonomia: ${this.autonomia}h`;
  }
  precio() {
    return super.precio() + 100 + this.autonomia * 15;
  }
}


//Parte 2
class Tablet extends Portatil {
  constructor(
    marca,
    modelo,
    ram = 4,
    disco = 128,
    pulgadas = 10,
    autonomia = 10,
    lapiz = false,
  ) {
    super(marca, modelo, ram, disco, pulgadas, autonomia);
    this.lapiz = lapiz;
  }

  precio() {
    return super.precio() + (this.lapiz ? 50 : 0);
  }
  toString(){
    return `${super.toString()}, Lapiz: ${this.lapiz ? "Si" : "No"}`
  }
}

//Parte 3
class Servidor extends Ordenador {
  constructor(marca, modelo, nucleos = 8, ram = 32, disco = 2000) {
    super(marca, modelo, ram, disco, 0); //siempre 0 pulgadas
    this.nucleos = nucleos;
  }
  precio() {
    return (500 + this.nucleos * 60 + this.ram * 12 + this.disco * 0, 15);
  }
  toString() {//Dell PowerEdge — 16 núcleos, RAM: 64 GB, Disco: 4000 GB, sin pantalla
    return `${this.marca} - ${this.nucleos} núcleos, RAM: ${this.ram} GB, Disco: ${this.disco} GB, sin pantalla`
  }
}

//Parte 4
class Gaming extends Ordenador {
  constructor(marca, modelo, grafica, ram = 16, disco = 1024, pulgadas = 27) {
    super(marca, modelo, ram, disco, pulgadas);
    if (grafica.trim() === "" ) {
      throw new Error("La grafica es obligatoria");
    }
    this.grafica = grafica;
  }
  precio() {
    return super.precio() + 400;
  }
  toString() {
    return `${super.toString()}, Gráfica: ${this.grafica}`;
  }
}

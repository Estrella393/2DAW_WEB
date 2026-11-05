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
}

const ordenador1 = new Ordenador("Mac", "10");
const ordenador2 = new Ordenador("HP", "12", 16, 512, 17);

const portatil1 = new Portatil("Philips", "2");
const portatil2 = new Portatil("Philips", "4", 8, 265, 15);

console.log(ordenador1.toString());
console.log(ordenador2.toString());

console.log(portatil1.toString());
console.log(portatil2.toString());

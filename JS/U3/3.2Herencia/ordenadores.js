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

const ordenador1 = new Ordenador("Mac", "10");
const ordenador2 = new Ordenador("HP", "12", 16, 512, 17);

const portatil1 = new Portatil("Philips", "2");
const portatil2 = new Portatil("Philips", "4", 8, 265, 15);

console.log(ordenador1.toString());
console.log(ordenador2.toString());

console.log(portatil1.toString());
console.log(portatil2.toString());

//Parte 1
new Ordenador("Acer", "Aspire").precio();
new Portatil("Apple", "MacBook Air").precio();

//Parte 2
class Tablet extends Ordenador {
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
  toString() {}
}

//Parte4
class Gaming extends Ordenador {
  constructor(marca, modelo, grafica, ram = 16, disco = 1024, pulgadas = 27) {
    super(marca, modelo, ram, disco, pulgadas);
    if (typeof grafica !== "string" || marca.trim() === "") {
      throw new Error("La grafica es obligatoria");
    }
    this.grafica = grafica;
  }
  precio() {
    return super.precio() + 400;
  }
  toString() {
    return `${SourceBuffer.toString()}, Gráfica: ${this.grafica}`;
  }
}

//Parte 5
const inventario = [new Ordenador(""), new Ordenador("")];

//6
function mostrarInventario(inventario) {
  console.log(textoInventario(inventario));
}

function textoInventario(inventario) {
  const r = inventario.map(equipo).join("\n");
}

//c
function masCaro(lista) {
  //return Math.max(...lista);
  //con reduce
  const suma = lista.reduce((max, valor) => {
    if (valor.precio() > max.precio()) {
      return valor;
    } else {
      return max;
    }
  }); //sin inicializar ocntendra el primer elemento del array como valor inical
}

//total por marca
function totalPorMarca(lista) {
  const totales = {}; //objero vacio que guardara nombre y precio
  for (const quipo of lista) {
    totales[equipo.marca] = totales[equipo.marca ?? 0] + equipo.precio(); //si undifiend =0
  }
  return totales;
}

const catalogo = [
  {
    id: 1,
    nombre: "Teclado",
    precio: 25.5,
    categoria: "perifericos",
    stock: 10,
  },
  { id: 2, nombre: "Ratón", precio: 12, categoria: "perifericos", stock: 0 },
  {
    id: 3,
    nombre: 'Monitor 24"',
    precio: 139.9,
    categoria: "pantallas",
    stock: 4,
  },
  { id: 4, nombre: "Cable HDMI", precio: 7.95, categoria: "cables", stock: 25 },
];

const carrito = {
  cliente: "Lucía",
  lineas: [],

  agregar(idProducto, unidades = 1) {
    const producto = catalogo.find((p) => p.id === idProducto); //si existe te lo devuleve y si no undefiend
    //let yaenCarrito = producto ? producto.unidades : 0;

    if (!producto) {
      console.warn(`No existe ${idProducto}`);
      return false;
    }

    if (producto.stock < unidades) {
      console.warn(`Sin stock de  ${producto.nombre}`);
      return false;
    }

    const linea = this.lineas.find((l) => l.id === idProducto);
    let unidadesEnCarrito = 0;

    if (linea) {
      unidadesEnCarrito = linea.unidades;
    }

    if (producto.stock < unidadesEnCarrito + unidades) {
      console.warn(`Sin stock para esta petición de  ${producto.nombre}`);
      return false;
    }

    if (linea) {
      linea.unidades += unidades;
    } else {
      this.lineas.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        unidades: unidades,
      });
    }
    return true;
  },
  total() {
    return this.lineas.reduce((acu, l) => acu + l.precio * l.unidades, 0); //retun(acumulador,objeto) y empieza en 0
  },
  resumen() {
    return this.lineas
      .map(
        (l) =>
          `${l.unidades} x ${l.nombre} = ${l.precio * l.unidades.toFixed(2)}euros`,
      )
      .join("\n");
  },
};

carrito.agregar(1);
carrito.agregar(3);
carrito.agregar(1, 2);
carrito.agregar(2);

console.log(carrito.resumen());
console.log(`Total: ${carrito.total().toFixed(2)} euros`);
console.table(carrito.lineas);

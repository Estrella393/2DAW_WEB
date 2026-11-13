const pedidos = [
  { cliente: "Carmen", gasto: 30 },
  { cliente: "Carmen", gasto: 30 },
  { cliente: "Paula", gasto: 180 },
  { cliente: "Javier", gasto: 50 },
  { cliente: "Javier", gasto: 15 },
  { cliente: "Pepe", gasto: 200 },
];

const gastoCli = new Map();

for (const [cliente, gasto] of pedidos) {
  const suma = gastoCli.get(cliente) ?? 0;
  gastoCli.set(cliente, suma + gasto);
}

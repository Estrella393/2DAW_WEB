const asignaturas = new Map([
  ["Entorno cliente", 60],
  ["FOL", 30],
  ["Entorno servidor", 80],
]);

for (const [modulo, horas] of asignaturas) {
  console.log(` ${modulo};  ${horas}`);
}

suma = 0;
for (const horas of asignaturas.values()) {
  //OF
  suma = suma + horas;
}
/*for (asig in asignaturas) {
  suma = suma + asignaturas.get[asig];
}*/
console.log(`Horas totales ${suma}`);

asignaturas.has["Entorno Cliente"];
asignaturas.delete["Fol"];
console.log(asignaturas.size);

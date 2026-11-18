const inscripciones = [
  "ana@ies.es",
  "luis@ies.es",
  "ANA@ies.es",
  "marta@ies.es",
  "luis@ies.es",
  "pablo@ies.es",
  "Marta@ies.es",
];
//si crearamos directamente un set:const numeros = new Set([1, 2, 2, 3, 3, 4]);
const inscripciones1 = new Set(inscripciones); //hay que poner new antes
console.log(inscripciones1);
console.log(inscripciones1.size);

//no se puede aploicar toLowerCase a todo el array
//hago un set vacio y luego voy añadiendo correos ya normalizados
const inscripciones2 = new Set();
for (let correo of inscripciones) {
  inscripciones2.add(correo.toLowerCase());
}
console.log(inscripciones2);

const mapa1 = new Map();
for (let correo of inscripciones) {
  const correoNormalizado = correo.toLowerCase();
  if (mapa1.has(correoNormalizado)) {
    mapa1.set(correoNormalizado, mapa1.get(correoNormalizado) + 1); //map utiliza set para guardar una clave y un valor, no add. Con get accedemos al valor de la clave
  } else {
    mapa1.set(correoNormalizado, 1);
  }
}
for (let [clave, valor] of mapa1) {
  console.log(clave + "-> " + valor);
}

const ordenado = Array.from(inscripciones2).sort();//o con operador spread()  const array = [...inscripciones2];
console.log(ordenado);

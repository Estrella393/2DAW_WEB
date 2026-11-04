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

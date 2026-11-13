//1
resul = Math.random();
if (resul < 0.5) {
  //no cuento el = para que sea igual de probabilidad, ya que el else solo llega a 0,99
  console.log("El resultado ha sido cara:", resul);
} else {
  console.log("El resultado ha sido cruz:", resul);
} //el else va fura de {} del if
//para ejecutar NODE (ej:  node .\random.js)

//2

const n1 = Number(prompt("Introduce un mínimo")); //NUMBER, no int
const n2 = Number(prompt("Introduce un máximo"));
const res = Math.floor(Math.random() * (n2 - n1 + 1)) + n1; //FUERA

alert(`Numero aleatorio entre ${n1} y ${n2}: ${res}`); //aqui solo con ``
alert(res);

//3
// generar pin que acepte 0 al principio
//for(let i=0;i<5;i++)
//const pin = Math.floor(Math.random() * (0 - 9999 + 1)) + 9999;

const d1 = Math.floor(Math.random() * 10);
const d2 = Math.floor(Math.random() * 10);
const d3 = Math.floor(Math.random() * 10);
const d4 = Math.floor(Math.random() * 10);

alert(`${d1}${d2}${d3}${d4}`);

//document,body.style.background-color="color[n]";    se cambia con colores en ingles "red",asique hacemos array
//4
const array = [
  "red",
  "yellow",
  "purple",
  "orange",
  "green",
  "brown",
  "pink",
  "blue",
];
const color = Math.floor(Math.random() * (0 - 7 + 1)) + 7;
document.body.style.backgroundColor = array[color];

function cuadrado1(n) {
  return n * n;
}

//PASO 1: guaardar la funcion en una constante

const cuadrado2 = function (n) {
  return n * n;
};

//PASO 2: quitamos "function"

const cuadrado3 = (n) => {
  return n * n;
};

//PASO 3: si es solo una expresion quitamos llaves y return

const cuadrado4 = (n) => n * n;

//Con un solo parametro le puedo quitar los parentesis

const cuadrado5 = (n) => n * n;

console.log(cuadrado1(4), cuadrado2(4), cuadrado3(4), cuadrado5(4));

//cuerpo con varias sentencia: llaves y return obligatorios

const calificar = (nota) => {
  if (nota < 5) return "suspenso";
  if (nota >= 5) return "aprobado";
};

console.log(calificar(4));

const resta = (a, b) => {
  return a - b;
};

console.log(resta());

//datos
const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "B", nota: 4.5 },
  { nombre: "C", nota: 9.5 },
  { nombre: "D", nota: 5.5 },
  { nombre: "E", nota: 3.5 },
];

function estaAprobado(nota) {
  return nota >= 5;
}

//solucion 1
const estaAprobadoConFlecha = (nota) => nota >= 5;

function redondear(numero, decimales = 1) {
  return Math.round(numero * 10 ** decimales) / 10 ** decimales;
}

//solucion 2
const redondearFleacha = (numero, decimales = 1) =>
  Math.round(numero * 10 ** decimales) / 10 ** decimales;

//poner parentesis, si no piensa que es codigo normal
const ficha = (nombre, nota) => ({ nombre, nota });

//crea "nombreAproabados" recibe un array de alumno y devuelve in array con los nombres de los aprobados

const nombreAprobados = (lista) =>
  alumnos.filter((a) => estaAprobadoConFlecha(a.nota)).map((a) => a.nombre);

console.log(nombreAprobados);

//crea "notaMedia":recube un array de alumnos y deculeve la media reondea aun decimal (reutiliza redondearFlecha) si el arrray esta vacio
// devuelve 0 Pista: for ... of dentro de una flecha con llaves

const notaMedia = (lista) => {};

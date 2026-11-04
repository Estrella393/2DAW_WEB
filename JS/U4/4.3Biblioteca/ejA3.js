const notas = [7.5, 4.9, 10, 5, 6.25, 3, 8.8, 11, 9];

for (let i = 0; i < notas.length; i++) {
  let calif = null; //o ""
  if (notas[i] < 5) {
    calif = "Insuficiente";
  } else if (notas[i] < 6) {
    calif = "Suficiente";
  } else if (notas[i] < 7) {
    calif = "Bien";
  } else if (notas[i] < 9) {
    calif = "Notable";
  } else if (notas[i] <= 10) {
    calif = "Sobresaliente";
  } else {
    calif = "Nota no válida";
  }
  console.log(`Alumno ${i + 1} : ${notas[i]} -> ${calif}`);
}

let notaMax = 0;
let cont = 0; //NOTAS VALIDAS
let suma = 0;
let contAprobados = 0;
for (nota of notas) {
  if (nota >= 5) {
    contAprobados++;
  }
  if (nota >= 0 && nota <= 10) {
    //para que no entren notas invalidas, como la nota 11
    cont++;
    suma = suma + nota;
    if (nota > notaMax) {
      notaMax = nota;
    }
  }
}
const media = suma / cont;
console.log(`Número de aprobados : ${contAprobados} `);
console.log(`Media(notas válidas): ${media} `);
console.log(`Nota más alta: ${notaMax} `);

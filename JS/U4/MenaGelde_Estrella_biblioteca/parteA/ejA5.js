//1
function transformar(array, fn) {
    const arrayNuevo=[]
    for (let elemento of array){
        arrayNuevo.push(fn(elemento))//dentro de cada elemento es donde aplico la funcion

    }
  return arrayNuevo;
}


const array1=[20,33,12,54];

function aumentar(n) {//suma 1
    return n+1;
}
const numeros1=transformar(array1, aumentar);
console.log(numeros1);


//2
function  quedarse(array, condicion) {
    const arrayNuevo=[]
    for (let elemento of array){
        if (condicion(elemento)){
            arrayNuevo.push(elemento);
        }
    }
  return arrayNuevo;
}

function condicion(n){//busco pares
    return n%2==0;
}
const numeros2=quedarse(array1, condicion);//utilizo el array de antes
console.log(numeros2);


//3
const numeros = [3, 8, 1, 6];
const nDuplicados = transformar(numeros, n => n * 2);//utilizo la primera funcion que tiene como parametro una funcion
console.log(nDuplicados);

//4
//funcion map: recorre el array y aplica la funcion que indiques
console.log(numeros.map(aumentar));

//funcion filter:selecciona todos los elementos que cumplen una condicion
console.log(numeros.filter(condicion));

//5
const precios = [12, 45, 8, 99, 30];
const precioFiltrado=(precios.filter(n=>n>10)).map(n=>n*1.21);
let suma=0;
for(elemento of precioFiltrado){//o podria sumar encadenando esta funcion: .reduce((acumulador, precio) => acumulador + precio, 0);(0 es el valor inicial del acumulador)
    suma=suma+elemento;
}
console.log(suma.toFixed(2));//redondemos a 2  decimales



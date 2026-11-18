//Parte 1
console.log(new Ordenador("Acer", "Aspire").precio());
console.log(new Portatil("Apple", "MacBook Air").precio());


//Parte 5
const inventario = [
  new Ordenador("HP", "EliteDesk", 16, 1024, 24),
  new Ordenador("Acer", "Aspire"),
  new Portatil("Apple", "MacBook Air"),
  new Portatil("Lenovo", "Yoga", 16, 1024, 14, 10),
  new Tablet("Apple", "iPad", 8, 256, 11, 10, true),
  new Tablet("Samsung", "Galaxy Tab"),
  new Servidor("Dell", "PowerEdge", 16, 64, 4000),
  new Gaming("Asus", "ROG", "RTX 4070", 32, 2000),
  new Gaming("HP", "Omen", "RX 7800")
];

//Comprobacion final de precios
console.log(inventario[4].precio());//ipad
console.log(inventario[5].precio());//galaxy
console.log(inventario[6].precio());//poweredge
console.log(inventario[7].precio());
console.log(inventario[8].precio());

try{
  new Gaming  ("HP","1");
}catch{
  console.log("Necesitas poner la tarjeta grafica")
}
//6
function mostrarInventario(inventario) {
  console.log(textoInventario(inventario));
}
function textoInventario(inventario) {
  //tambien se puede hacer con map:const r = inventario.map(equipo).join("\n");
  // o con foreach, en este caso creo un array y voy anadiendo cada frase del foreach
  //constructor se usa para sacr el nombre de la clase
  let r = [];
  inventario.forEach((equipo, i) => {
    r.push(`${i + 1}. ${equipo.constructor.name}: ${equipo.toString()}, Precio: ${equipo.precio()} €`);
  });
  return r.join("\n");
}
mostrarInventario(inventario);


function describir(equipo){
  console.log(textoDescribirEquipo(equipo));
}
function textoDescribirEquipo(equipo){
  let r = "";//antes he utilizado un array para guardar y ahora uso un string, se pueden las dos
  for (valor in equipo){
    r=r+ `${valor} :${equipo[valor]} \n`;
  }
  return r;
}
describir(inventario[0]);


function contarPortatiles(lista){
  console.log(textoContarPortatiles(lista));
}
//si viene de clase Portatil, incluye las hijas
function textoContarPortatiles(lista) {
  return lista.filter(equipo => equipo instanceof Portatil).length;//
}
contarPortatiles(inventario);


function contarSoloPortatiles(lista){
  console.log(textoContarSoloPortatiles(lista));
}
function textoContarSoloPortatiles(lista) {
  return lista.filter(equipo => equipo.constructor === Portatil).length;
}
contarSoloPortatiles(inventario);


function masCaro(lista){
  console.log(textoMasCaro(lista));
}
function textoMasCaro(lista) {
  //return Math.max(...lista);
  //con reduce
  const suma = lista.reduce((max, valor) => {
    if (valor.precio() > max.precio()) {
      return valor;//si el equipo actual es más caro
    } else {
      return max;//si el anterior sigue siendo más caro
    }
  }); //sin inicializar ocntendra el primer elemento del array como valor inical
return suma;//que en realidad devuleve el max
}
masCaro(inventario);


function dentroDePresupuesto(lista, maximo){
  console.log(textoDentroDePresupuesto(lista, maximo));
}
function textoDentroDePresupuesto(lista, maximo){
  const filtrado =lista.filter(equipo => equipo.precio()<=maximo);
  return filtrado.sort((a, b) => a.precio() - b.precio());//de menor a mayor
  /*Si el resultado es negativo, a va primero.
Si es positivo, b va primero.
Si es cero, mantienen su posición relativa */
}
dentroDePresupuesto(inventario, 700);


function totalPorMarca(lista) {
  console.log(textoTotalPorMarca(lista));
}
function textoTotalPorMarca(lista) {
  const totales = {}; //objero vacio que guardara nombre y precio
  for (const i in lista) {
    const equipo = lista[i];//como es un for in primero saco el equipo
    totales[equipo.marca] = (totales[equipo.marca] ?? 0) + equipo.precio(); //si undifiend =0
  }
  return totales;
}
totalPorMarca(inventario);


function ampliarRam(lista, clase, gb) {
  console.log(textoAmpliarRam(lista, clase, gb));
}
function textoAmpliarRam(lista, clase, gb) {
    const filtrados=lista.filter(equipo => equipo instanceof clase);
    filtrados.forEach(equipo => {
            equipo.ram = equipo.ram + gb;
        });
}
ampliarRam(inventario, Ordenador, 8);
mostrarInventario(inventario);



/*  1. ¿Por qué contarPortatiles y contarSoloPortatiles dan resultados distintos? ¿Qué significa que una Tablet «es un» Portatil?
            Porque una tiene en cuenta las tablets(porque todas son clase Portatil) y la otra no (porque tiene en cuenta el constructor). 
            Que desciende de esa clase y puede heredar atributos o metodos.
    2. En mostrarInventario llamas a precio() sin saber de qué clase es cada equipo. ¿Cómo se llama esta característica? 
    ¿Qué versión de precio() se ejecuta para una Tablet?
            Polimorfismo, diferentes clases tienen un método con el mismo nombre.
            Tablet tiene si propio metodo sobrescrito asique utiliza ese.
    3. Tablet y Servidor sobrescriben precio() de forma distinta. ¿En qué se diferencian? ¿Cuándo conviene cada opción?
            Una llama al metodo precio de la clase superior y la otra no. Si no se parece el metodo que vayas a crear no tiene sentido llamar a super.
    4. ¿Por qué describir no muestra precio ni toString?
            Porque eso son metodos, cuando llamo al objeto en describir solo se muestran sus atributos.
    5. Después de llamar a ampliarRam, ¿cambia el inventario original? ¿Por qué?
            Si, porque paso por parametro el inventario y lo modifico. No creo ninguna copia.
    6. ¿Qué pasaría en ampliarRam(inventario, Ordenador, 8)? 
            Se suman 8 de RAM a todaos los objetos, porque o son Ordenadores o destienden de él*/
            
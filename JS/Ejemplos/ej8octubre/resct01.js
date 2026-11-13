function media(...numeros) {
  console.log("numeros =", numeros, "| longitud:", numeros.length);
  if (numeros.length === 0) return 0;

  let acu = 0;

  for (const n of numeros) {
    acu += n;
  }

  return acu / numeros.length;
}

console.log(media(10, 20));
console.log(media(10, 20));
console.log(media(10, 20));

console.log(media(10, 20));
console.log(media(10, 20));
console.log(media(10, 20));

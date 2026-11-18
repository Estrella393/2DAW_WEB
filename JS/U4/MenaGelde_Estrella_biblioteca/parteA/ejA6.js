function mediaAprobados(notas) {
    let suma = 0;
    let contador = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 5 && typeof notas[i] === 'number') {
            suma += notas[i];
            contador++;
        }
    }
    if (contador===0) {
        return null;
    }

    return suma / contador;
}
console.log(mediaAprobados(["7", 4, 4, 4, 3])); // Esperado: 7.17 aprox.
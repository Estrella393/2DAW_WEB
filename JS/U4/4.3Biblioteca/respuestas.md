A1. Conversiones de tipos

Expresión: "5" + 3  
Mi predicción :53
Resultado real
Tipo (typeof)
Explicación (una línea)
|Expresión | Mi predicción | Resultado real | Tipo(typeof) | Explicación (una línea) |
|-----------------------|---------------|----------------|--------------|-------------------------|
|"5" + 3 | "53" | Cell 3 | Row 1 | Cell 2 | Cell 3 |
|"5" \* 3 | "555" | Cell 6 | Row 2 | Cell 5 | Cell 6 |
|"5" - "2" | 3 | Cell 9 | Row 3 | Cell 8 | Cell 9 |
|Number("") | | Cell 9 | Row 3 | Cell 8 | Cell 9 |
|Number("12px") |12 | Cell 9 | Row 3 | Cell 8 | Cell 9 |
|parseInt("12px") | Cell 8 | Cell 9 | Row 3 | Cell 8 | Cell 9 |
|parseFloat("3.75€") | Cell 8 | Cell 9 | Row 3 | Cell 8 | Cell 9 |
|"10" == 10 | Cell 8 | Cell 9 | Row 3 | Cell 8 | Cell 9 |
|"10" === 10 | Cell 8 | Cell 9 | Row 3 | Cell 8 | Cell 9 |
|0 || "valor por defecto"| Cell 8 | Cell 9 | Row 3 | Cell 8 | Cell 9 |

Para terminar, responde: ¿por qué NaN === NaN devuelve false? ¿Cómo compruebas correctamente si
un valor es NaN?

A2. Ámbito de las variables

1. ¿Qué muestra cada console.log? Ejecútalo después y compara.
   Prediccion
   calcularTotal(20, 3); :Dentro: 55
   console.log("Fuera:", total); : Fuera: 0
   no existe descuento

   Ejecutandolo
   Dentro: 55
   Fuera: 0
   Uncaught ReferenceError: descuento is not defined

2. ¿Por qué total vale distinto dentro y fuera de la función?
   Porque modifica la variable dentro del bucle
3. ¿Qué error produce la última línea y por qué?
   Uncaught ReferenceError. No puede acceder a la variable fuera del bucle
4. ¿Qué cambia si dentro de la función sustituyes let total = … por total = …?
   La variable global tambieen se modifica
5. ¿Qué ocurre si añades gastosEnvio = 7; al final del programa?
   Nada, si se camboa despues de la funcion no afecta.

A1. Conversiones de tipos

| Expresión               | Mi predicción   | Resultado real  | Tipo (typeof) | Explicación                          |
|-------------------------|-----------------|-----------------|---------------|--------------------------------------|
| "5" + 3                 | "53"            | "53"            | string        | Une el texto y el número             |
| "5" * 3                 | "555"           | 15              | number        | Convierte el "5" en número           |
| "5" - "2"               | 3               | 3               | number        | Los convierte en números             |
| Number("")              |                 | 0               | number        | Una cadena vacía se convierte en 0   |
| Number("12px")          | 12              | NaN             | number        | No puede convertir todo a números    |
| parseInt("12px")        | 12              | 12              | number        | Convierte solo el principio          |
| parseFloat("3.75€")     | 3.75            | 3.75            | number        | Convierte solo el principio          |
| "10" == 10              | true            | true            | boolean       | Compara convirtiendo a numero        |
| "10" === 10             | false           | false           | boolean       | Compara también el tipo de dato      |
| null + 1                | error           | 1               | number        | null se convierte en 0               |
| undefined + 1           | NaN             | NaN             | number        | undefined produce NaN                |
| typeof NaN              | number          | number          | number        | El tipo de NaN es number             |
| Boolean("0")            | true            | true            | boolean       | Una cadena con contenido es verdadera|
| 0 || "valor por defecto"| 0               |valor por defecto| string        | 0 es falso                           |
| 0 ?? "valor por defecto"| 0               | 0               | number        | 0 no es ni null ni undefined         |


Para terminar, responde: ¿por qué NaN === NaN devuelve false? ¿Cómo compruebas correctamente si
un valor es NaN?
Porque aunque el tipo sea number, sigue representando un valor no valido que no es igual ni a si mismo.
Se puede comprobar con esta funcion: Number.isNaN(valor)  o isNaN(valor) (pero en este caso trata de convertirlo,
si no lo puede convertir a numero entonces es True)

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


DESCRIPCIÓN BREVE:
La estructura se organiza en libro(sus atributos y métodos básicos) y biblioteca(donde ya se hacer los métodos de ordenar, filtrar, crear índice... y se exporta catálogo con los libros ya agregados).
En app utilizo pintarseleccion() que crea texto html con ese catátago y los distintos métodos. En CSS meto los estilos con id, clases o los elementos.


Captura de la aplicación:
![alt text](img\app.png)

Captura de la consola sin errores con el console.table() y los resultados de la simulación de préstamos:
![alt text](img\consola.png)


ARQUITECTURA:
La aplicación se ejecuta en el cliente (navegador del usuario). Los cambios se mantienen mientras la aplicación está abierta, pero no se guardan de forma permanente. Para que se guardaran los cambios en un servidor haria falta recibir las solicitudes del navegador y guardar los datos en una base de datos.

Se usa JavaScript porque permite ejecutar el código directamente en el dispositivo del usuario además interactúa directamente con el Document Object Model (DOM). Otros lenguajes de cliente son React o Angular

Al cargar los scripts como módulos, podemos separar el código en distintos archivos y organizarlo mejor la aplicación. Pero es necesario un servidor local (por ejemplo, la extensión de LiveServer), en lugar de abrir directamente el fichero porque sino no enlaza los demás (por ejemplo, si tienes un HTML con un CSS solo verias la parte de HTML).

Un lenguaje interpretado en el navegador se ejecuta línea por línea en tiempo de ejecución, por lo que pueden aparecer errores al usarlo. Pero es mucho mas flexible, más rapido a la hora de hacer cambios y portable. 
En cambio, un programa compilado la traducción se realiza completamente antes de ejecutar el programa. Lo que significa que será necesario "recompilar" el programa cada vez que necesitemos hacer un cambio. Su principal ventaja es la rápidez.

Herramientas usadas: Visual Studio Code como IDE, un servidor local para ejecutar el proyecto(o la extensión de VS o el servidor de PHP con  php -S 127.0.0.1:8000) y las herramientas de desarrollador del navegador para probar el funcionamiento.


DECISIONES:
Combinar los filtros: voy haciendo "cátalogos temporales" ya que si lo guardo en la variable normal, se guarda como un array y no me dejaría utilizar los metodos de Biblioteca. Y una vez hecho eso, aplico el siguiente filtro. 

Cómo ordenas sin modificar el array original:
Hago "const nuevaBiblio = [...this.libros]; " con spread copia los elementos en un array nuevo e independiente. Así puedo ordenar nuevaBiblio sin alterar this.libros.

Cómo conviertes los campos de texto en cargarDesdeTexto():
Utilizo split("\n") para separar el texto en líneas. Uno un map() recorre el array cadaLibro, separa cada libro por los ; y devuelve un array nuevo que contiene los arrays resultantes. Después, utilizo trim() para eliminar espacios sobrantes y toLowerCase() para normalizar el texto de disponibilidad. Finalmente, convierto los campos que deben ser números con Number() y creo los objetos Libro con los datos obtenidos.

Captura del validador del W3C sin errores:
![alt text](img\W3C.png)



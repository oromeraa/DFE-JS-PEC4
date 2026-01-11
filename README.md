oromeraa
Omar Romera Aller
## Ejercicio 1
Hecho. Pero he tenido lios con iniciar git en una directorio superior. Al final lo he iniciado en le mismo proyecto de Angular. He renombrado el README.md generado por Angular a README_angular.md y he creado uno nuevo llamado README.md que es el de la PEC de la asignatura. Se ha creado usando Angular actual pero con la estructura antigua que sigue el libro de la bibliografía. Es decir, sin standalone ni routing y con style CSS.
## Ejercicio 2
Juego de mesa creado y añadido al index.html. He hecho un botón para debugar el comportamiento con isOnSale.
## Ejercicio 3
Implementadas directivas. Aquí confieso que he hecho trampas y he usado una IA para crear una barra inferior de debug que me permite modificar en tiempo real variables de otros componentes con el fin de ir debugando los cambios que voy haciendo. En este caso ha sido para conmutar isOnSale pero sin estar dentro de la propia tarjeta de producto, no sé si en los siguientes ejercicios me será útil pero espero que sí para poder separar los poderes del estado.
## Ejercicio 4
Se empieza a complicar la cosa pero creo que empiezo a entender como funciona Angular. Automatiza y modulariza el código. Por otro lado no sé cómo pero se ha descontrolado git. Seguiré a partir de ahora solo tirando commits a main. 
## Ejercicio 5
Hecha navbar con enlaces a futuras opciones. He intentado usar bootstrap y he conseguido poner la navbar. El footer no acababa de salir bien. También he limpiado el código cosa de debug de los primeros ejercicios.
## Ejercicio 6
Formulario hecho con validación en todos los campos obligatorios. La regex ^https?:://[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$ valida lo que pide exactamente el enunciado pero no valida ni la dirección propuesta ni cualquier web dirección. Faltan extensiones, caracteres especiales, www., etc... se utiliza ^https?:\/\/(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,3}(\/[a-zA-Z0-9\-]+(\.[a-zA-Z]+)?)*$ con esta nuevo regex, contemplamos muchos más casos (www., guiones en el dominio, subrutas con o sin extension)
## Ejercicio 7
Resuelto. La información del libro no me ha parecido ni correcta ni completa. Puede que por usar versiones diferentes de Angular. Así que buscando y buscando he dado con:
https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/ , que me ha dado bastante claves para hacer el validador personalizado. Cambién la terminal del `ng serve` también me ha dado información que he ido depurando hasta dar con la solución final. Me sorprende lo parecido y lo diferente a la vez que es hacer un template y un reactive, sobre todo a la hora de crear el formulario, los validadores y como hacer los gets de los errores.

## Conclusiones
Una PEC más dura que la anterior, la información del libro no sé si es desactualizada o limitada o qué... pero me he tenido que romper los cuernos por internet para resolver bastantes dudas. El libro te da una idea aproximada pero en muchas ocasiones la idea que presentaban no compilaba. Eso puede que sea por la versión que utilizaba de Angular. Realmente no lo sé. Pero vaya, si el libro usa una versión del 2018 y yo tenía la última de 2024, no me sorprendería que fuera por eso. Aún así usar Angular me ha acercado a como programo en mi trabajo, intentando mantenerme en la metodología Agile. Modular, escalable, limpio.
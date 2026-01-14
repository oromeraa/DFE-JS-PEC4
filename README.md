oromeraa
Omar Romera Aller
## Ejercicio 1
Bueno me ha costado arrancar. He creado el servicio y he movido los métodos de article-list a article-service. He modificado los componentes para que usen el servicio. Me un mensaje en la consola me salida duplicado pero era por dejar viejo código.
## Ejercicio 2
El servidor es un proyecto a parte. Se inicia y devuelve datos a través de la api. La primera modificación la imagen del articulo 2 está rota pero porque no hay ruta guardada en el servidor. El reactive funciona. Añadido filtro de búsqueda con botón, pero creo que con "tecleando en el input" se refiere a que se refresque a medida que tecleas (un live search que le llamaré yo). 

NOTA: En la PEC3 utilicé una navbar de bootstrap. Ésta tenía buscador pero no lo utilicé. Quizás se podría integrar en el proyecto.

HECHO -> NOTA2: acabo de darme cuenta que el botón de + y - actualiza la cantidad en el servidor pero no refresca la lista. Hay que hacerlo.
## Ejercicio 3
Cambiado la ficha del artículo para que muestre la imagen por defecto si no hay imagen y el currency utilizando el pipe.

NOTA: en una PEC anterior utilicé una api de exchange rates para convertir monedas. Quizás se podría integrar en el proyecto.
## Ejercicio 4
Creado esqueleto de componentes, servicios y interceptores. La api de usuarios en el enunciado la entendí mal, es /api/user/login y /api/user/register no /user/login y /user/register. Login y Registro funcionan. Guardamos token correctamente. Interceptor funciona. El routing hecho, se ha rehecho el navbar para usarlo con routerLink y además se ha añadido el botón de logout. Se ha rematado con la protección de rutas. También se ha modificado la función de logout para que redirija a la página de login o sino podia permanecer en páginas protegidas.

HECHO -> NOTA: un logout estaría bien implementar.
## Ejercicio 5
Módulos realizados. Resetructuración del proyecto. Primero me he encontrado un problema con el defaultImage, se estaba duplicando la instancia. Luego he tenido un problema con el routing en la web de Login y Register, era poque en el navbar se llamaba a rutas viejas sin el "/user" delante.
## Conclusiones
Esta vez me siento más cómodo con Angular. A los días de acabar la PEC3 me quedó sensación de que realmente estaba todo muy hecho y que se automatizaba todo. Pero ahora con esta práctica me he dado cuenta que se programa mucho. Angular sólo es un kit de herramientas para facilitarte la programación. Pero se programa y mucho. Te permite hacer buenos proyectos, más organizados, más escalables y más mantenibles. Muy contento la verdad. 
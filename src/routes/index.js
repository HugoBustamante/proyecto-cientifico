//En este archivo vamos a importar los templates y las paginas que creamos, vamos a generar este manejo de rutas y como las vamos hacer render en nuestra aplicación:
//Importamos:
import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

//Creamos las rutas que vamos a manejar dentro de nuestra aplicación, para eso generamos un objeto estableciendo las rutas y que va hacer render en cada una de ellas:
const routes= {
    "/": Home, //Está va hacer render de home, el path inicial
    "/:id": Character, // Va hacer render a los personajes. El id va ser un valor dinamico. Según el id que me regrese la lista de los personajes es la sección a la que lo voy a mandar. Entonces yo no se cual puede ser el valor, puede ser entre el 1 y 256 o los valores o los perosnajes que tenemos.
    "/contact": "contact",//Podemos tener una seccion llamada contact. Hará render de un elemento contact.

    //Hasta aquí tenemos las rutas y la estructura principal.
};

//Creamos nuestro manejador que en este caso será router que se va a encargar de mostrar los elementos según la logica que vamos a establecer, Aquí vamos a trabajar con obtener valores desde el navegador y como vamos a estructurarlos para saber cual es la ruta en la cual nuestro usuario de nuestra aplicacion a querido moverse:
const router = async () => {//Vamos a esperar hasta que algo esté sucediendo...
    //Establecemos los templates que tenemos hacia un elemento del DOM. Esto quiere decir que vamos a empujar nuestras rutas a los tag del archivo index.html que está en la carpeta public. Esto significa que vamos hacer render de nuestros templates hacia esas secciones del index.html. Entonces primero obtenemos dichos tag:
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    header.innerHTML= await Header();//Tenemos el router donde empujamos la logica del template header al tag <header>

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Creamos la logica para manejar las rutas:
    const hash= getHash();// Conseguimos el hash en el que se encuentre o en el que se está moviendo el usuario...

    //Manejamos la ruta y la dejamos lista para trabajar:
    const route= await resolveRoutes(hash); // Le pasamos el hash que se obtiene... estara esperando hasta que está funcion haga el proceso de tomar primero el hash trabajarlo en está funcion y hacer las validaciones encesarias para luego retornar el valor.

    //Creamos una variable para contener el valor de las rutas que están arriba en routes:
    let render= routes[route] ? routes[route] : Error404;
    //Explicacion de este codigo:
    //Usamos bracket notation para pasar la ruta de forma dinamica dentro de la estructura de rutas (routes), es lo mismo a colocar routes."/" = esto me retornaria el home, o lo mismo a colocar routes."/:id" = esto me retornaria el id del personaje, o colocar routes."about"= me retornaría la seccion about.
    //Si se cumple que está la ruta en las rutas(routes) me retorna esa ruta sino significa que esa ruta no existe por lo tanto va a mostrar el error 404.

    //A la sección content le hacemos un innerHtml de render()
    content.innerHTML= await render();//Esto nos va hacer render de nuestra aplicación

    const headerBackground = header;
    const btnSwitch = headerBackground.querySelector("#switch")
    console.log(btnSwitch);

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark')
        btnSwitch.classList.toggle('active')

        // Save mode in localStorage
        if(document.body.classList.contains('dark')){
            localStorage.setItem('dark-mode', 'true')
        } else {
            localStorage.setItem('dark-mode', 'false')
        }
    })

    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.add('dark')
        btnSwitch.classList.add('active')
    } else {
        document.body.classList.remove('dark')
        btnSwitch.classList.remove('active')
    }


};

export default router; //Exportamos nuestro manejador de rutas
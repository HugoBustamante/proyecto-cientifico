//En este archivo va vivir la implementación de nuestro proyecto. Es el archivo de entrada
//Importamos router y creamos un elemento que va a estar escuchando cuando la pagina ya este lista, cuando lo esté entonces empujar la ruta que nosotros estamos llamando
import "regenerator-runtime/runtime";
import "core-js/stable";
import router from "./routes";


//Uitlizamos el objeto window que está disponible en el navegador el cual me permite saber si está en el contexto de la aplicación
window.addEventListener("load", router);//Pasamos el evento load y le pasamos una funcion puede ser anonima y adentro la establecemos pero en este caso va a ser la la funcion router que estoy trayendo desde otra sección. Escuchamos si la carga de la pagina a sucedido, recordemos que neustras aplicaciones cargan una sola vez todos los archivos, entonces cuando todos los archivos esten listos y cargados en el navegador, vamos a ejecutar el codigo que hemos recibido.

window.addEventListener("hashchange", router);//El evento que le agregamos a este addEvenlistener es hashchange que se encarga de que cuando cambie un hash va a desencadenar la logica que acabamos de agregar en router
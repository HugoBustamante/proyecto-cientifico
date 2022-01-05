//Acá vamos a crear un template base para nuestra aplicación para cuando hagamos el render y el llamado a la API podamos saber donde vamos a poner cada uno de estos elementos:
import getData from "../utils/getData";//Importamos la fucion que trae la información de la API...

//Crearemos una funcion que nos va a retornar la vista que necesitamos dentro del html
//Ahora como ya estamos importando y queremos usar hacer un llamado a la API con la funcion getData debemos convertir está función en un async await
const Home= async () => {
    const characters = await getData();//Hacemos el llamado a la API y almacenamos toda la información que trae la funcion
    //Convertimos nuestro template para poder hacer iteración por cada uno de los personajes quee stamos recibiendo de la Api:
    
    const view= `
    <div class="Characters">
    <!--Iteramos sobre todos los personajes que están dentro de la propiedad results de la API. Y por cada personaje que recibo voy a utilizar sus propiedades en el template-->
    ${characters.results.map( character => `
    <article class= "Characters-item">
        <a href= "#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </a>
    </article>
    `
    ).join('')}<!--Utilizamos join para quitar los espacios porque el map nos va a generar un arreglo y los espacios se van a notar por medio de una coma nuestra estructura del html-->
    </div>
    `
    return view; //Retornamos el template...
};

export default Home; //Exportamos nuestro template... 
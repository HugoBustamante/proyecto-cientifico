//Creamos le template para vista de la informacion de los personajes, que en el home tenemos la lista de personajes y al darles click , nos aparece la descripción de cada uno, esa es la vista que estaremos construyendo aquí:
import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
    const id= getHash();//Obtenemos el hash sobre el cual está moviendose...
    const character= await getData(id);// A getData le pasamos el id

    const view= `
    <div class="Characters-inner">
        <article class= "Characters-card">
        <img src="${character.image}" alt="${character.name}"/>
            <h2>${character.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes:<span>${character.episode.lenght}</span></h3>
            <h3>Status:<span>${character.status}</span></h3>
            <h3>Species:<span>${character.species}</span></h3>
            <h3>Gender:<span>${character.gender}</h3></span>
            <h3>Origin:<span>${character.origin.name}</span></h3>
            <h3>Last Location:<span>${character.location.name}</span></h3>
        </article>
    </div>
    `;

    return view; //Retornamos el template
}

export default Character; //Exportamos el template
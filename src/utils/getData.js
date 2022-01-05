//Este archivo traera los datos de la API
const API= "https://rickandmortyapi.com/api/character/";

//Creamos la función donde vamos a pedir los datos de está api y hacer render para nuestra aplicación:
const getData= async (id) => {//Va a recibir el id del personaje que nosotros estemos utilizando...
    
    //Logica:
    //Si id existe vamos a retornar una nueva url con la direccion de la API concatenado al id que estemos recibiendo la cual va a llamar al personaje que nosotros deseamos, en dado caso de que id no existe entonces nos va a retornar solo API por lo que va a traer a todos los personajes para hacer render del home:
    const apiURL= id ? `${API}${id}` : API;//De esta forma indentificamos hacia donde se está moviendo el usuario...

    //Hacemos la petición fetch para el llamado a esá información:
    try{//El estandar al hacer peticiones nos pide usar try catch...
    const response= await fetch(apiURL);
    const data= await response.json();
    return data;
    }catch(error){
            console.error("fetch error", error);
    }
};

export default getData; //Exportamos los datos.
//Esta funcion se va a encargar de resolver las rutas:

const resolveRoutes = (route) => {//Está funcion recibe la ruta obtenida por la funcion getHash
//La API que estamos trabajando tiene N cantidad de personajes (1000) entonces esa es la cantidad de elementos por los cuales nosotros podemos obtener estos ids al momento de hacer el getHash. Entonces generamos la siguiente validación

//Si obtuvo un id este no puede ser mayor a 3 caracteres y si no tuvo un id solo me va a regresar un valor que sería el "/".
if (route.length <= 3){
    //Si la ruta es exactamente igual (en tipo y en valor) a la cadena dentro de las comillas al /, en valor de la varaible validRoute es route, sino toma como valor un id:
    let validRoute= route === "/" ? route : "/:id";//De está forma garantizamos que estamos cumpliendo con las rutas que acabamos de establecer en nuestro archivo de rutas.

    return validRoute;
}
//Hay un detalle, si nosotros no hemos cumplido con está validación e imaginemos que hemos entrado a la seccion de about, pues about es mayor a 3 y no es parte de la logica principal que en este caso tiene que ser el home o un id dentro de la ruta. Entonces debemos de retornar este elemento según la sección para despues compararlo con nuestra sección de rutas
    return `/${route}`;//retornamos la ruta que recibimos el cual seria /about
};

export default resolveRoutes;
//Esta funcion se va a encargar de obtener id de los personajes:
//Aquí vamos a generar esa constante
const getHash= () =>
location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";//Accedemos al elemento del navegador location y obtenemos el hash en el que se encuentre y le pasamos valores.
//Explicacion del codigo de arriba:
//location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
//.slice(1) corta la url y muestra a partir del elemento en la primer posición. En este Caso el resultado es /1/
//.toLocaleLowerCase() convierte a minúscula la cadena. Esto es por si el usuario cambio a Mayuscula el contenido pues siempre nos lo va a regresar en minuscula.
//.split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
//[1] trae el elemento de la posicion 1 del split anterior que en este caso es 1 (representa la id 1, lo que estamos buscando obtener).
//|| si no encuentra la ruta que se está accediendo que nos mande solo el "/" esto nos va a mostrar a nosotros que se está accediendo a la raiz del proyecto y no se está navegando en alguna sección

export default getHash; //Exportamos la función
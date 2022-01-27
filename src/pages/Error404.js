//Creamos el template para el error 404:
const Error404 = ()=> {
    const view= `
        <div class="error404">
            <img src="https://i.imgur.com/cSTBrWj.png" alt="Error 404">
            <h2>¡Page not found!</h2>
        </div>
    `;
    return view; //Retornamos nuestro template
};

export default Error404; //Exportamos el template.
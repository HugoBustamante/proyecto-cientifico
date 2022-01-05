//Template para el header de nuestra aplicación:
const Header = () => {
    const view= `
    <div class="header-main">
    <div class="header-logo">
        <h1>
            <a href="#"><!--Para que no haya un refresh cuando precionamos sobre esté titulo en vez de colocar "/"               colocamos "#" de está manera hashchange, que ejecuta la función router, es disparado.-->
                100tifi.co
            </a>
        </h1>
    </div>
    <div class="header-nav">
        <a href="#/about/">
            About
        </a>
    </div>
    </div>
    `;

    return view; //Retornamos nuestro template
}

export default Header;
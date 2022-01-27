//Template para el header de nuestra aplicación:
const Header = () => {
    const view= `
    <div class="header-main">
        <div class="header-logo">
            <!--Para que no haya un refresh cuando precionamos sobre esté titulo en vez de colocar "/" colocamos "#" de está manera hashchange, que ejecuta la función router, es disparado.-->
            <a href="/"><img src="https://i.imgur.com/7utDxm8.png" alt="Rick and Morty"></a>
        </div>
        <nav class="header-nav">
                <a href="#/about/" class="nav-element">About</a>
                <button class="switch" id="switch">
                    <span><i class="fas fa-sun"></i></span>
                    <span><i class="fas fa-moon"></i></span>
                </button>
        </nav>
    </div>
    `;

    return view; //Retornamos nuestro template
}

export default Header;
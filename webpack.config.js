const path= require('path');  // Traemos path que es de node. nos permite acceder hacia donde nos estamos moviendo en el proyecto (en que carpetas), no importa si es en desarrollo local o en la nube.
const HtmlWebpackPlugin= require('html-webpack-plugin');// Añadimos el archivo que nos permite trabajar con html. Lo requerimos del paquete que isntalamos...
const CopyWebpackPlugin = require('copy-webpack-plugin');

//Creamos un modulo que vamos a exportar donde viene cada configuración de lo que va a suceder:
module.exports = {  //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar...
    //Lo primero es tener nuestro punto de entrada:
    entry: './src/index.js',// Punto de entrada con su dirección. Aquí vive el código inicial y de aquí parte al desarrollo.

    output: { //Donde se envía el proyecto estructurado y compilado listo para producción.
        path: path.resolve(__dirname, 'dist'),  //Creamos el lugar dónde se exportará el proyecto. Con resolve en este paso es para saber donde nos encontramos con el path y el __dirname se va a encargar de decir que donde se encuentre la carpeta hay es donde se va a crear la carpeta dist (distribution)
        filename: 'main.js' //Este es el nombre del archivo final para producción. donde se almacenara el compilado de todo lo que tiene nuestro proyecto en JavaScript
    },
    //Ahora trabajamos sobre las extensiones que va a tener nuestro proyecto:
    resolve: {
        extensions: ['.js'], //Extensiones que vamos a utilizar.
    },

    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar. En este caso la de Babel con la cual preparamos a nuestro proyecto para que funcione en todos los navegadores.
        rules: [    //Reglas. Son pasadas por medio de un arreglo...
            {   // El primer elemento que necesitamos es la Estructura de Babel: para eso necesitamos generar un test de como vamos a identificar los archivos segundo los que se enceuntran en neustro entorno:
                test: /\.js?$/, // Nos permite identificar los archivos según se encuentran en nuestro entorno. /\(regexp, es una forma de establecer valores que queremos filtrar ya sea de una ruta, de unos elementos o de los archivos que vamos a estar utilizando. Indicamos que sean extenciones .js y con ?$/ pasamos el regex, me va a permitir establecer cuales son estos elementos). “?” signifca que la S de .js es opcional en regexp lo que significaria que buscara archivos .j tambien. Pero para el caso del profesor no afecta mucho porque en su caso sus archivos j son javascript igual. Pero si es importante saberlo para proyecto ams grandes donde usemos quizas jsx y js y queramos discernir entre unos y otros.
                exclude: /node_modules/,    //Excluimos la carpeta de node modules. No queremos incorporar todo lo de esa carpeta que incluya archivos js a nuestro proyecto
                use: {//Indicamos que va a utilizar un loader...
                    loader: 'babel-loader', //Utilizar un loader como configuración establecida para trabajar todo nuestro codigo. Entonces indicamos el loader que instalamos que fue babel-loader
                    options: {
                        presets: [//Para que Babel pueda compilar codigo moderno de JavaScript para cualquier navegador. Está enduda está teoria.
                        ['@babel/preset-env']
                        ]
                    }
                }
            }
        ]
    },

    plugins: [  //Establecemos los plugins que vamos a utilizar
        new HtmlWebpackPlugin( //Este plugin permite trabajar con los archivos HTML
            {
                inject: true,   //Cómo o en donde mejor dicho, vamos a inyectar el <script> enlace a un archivo HTML.
                template: './public/index.html',  //Dirección donde se encuentra el template principal
                filename: './index.html',  //El nombre que tendrá el archivo. Este se guarda en la carpeta dist
            }
        ),

        new CopyWebpackPlugin({
            patterns: [{ from: "./src/styles/styles.css",
            to: '' }],//Aquí podriamos crear una carpeta que se llame assets, style, etc.. pero en este caso nuestra configuración no lo requiere.
        })
    ]
}

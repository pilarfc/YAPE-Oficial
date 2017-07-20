const express         = require('express'); //Framework Express
const bodyParser      = require('body-parser'); //Parsea el post para obtener objetos json en el request
const levelup         = require('levelup'); // Base de datos
const morgan          = require('morgan'); // Sistema de logging (muestra en la cosa los request)
const morganjson      = require('morgan-json');
const apiUsers        = require('./api/users'); //Endpoints relacionados al User model
var path = require("path");

const app = express();
const db  = levelup('./api/users', {valueEncoding: 'json'});

const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan(format));
//app.use(express.static('src')); /*agregué esto*/
app.use('/static', express.static(__dirname + '/src')) //Si queremos usar alguna otra carpeta que no sea src debemos de agregar otro app.use con el nombre de la carpeta. Tambien podemos usar el modulo path.join: const path = join; app.use('/static, express.static(path.join(__dirname, 'node-modules')))


/*app.get('/', (req, res) => { 
    res.sendFile(__dirname + 'src/index.html');  //Válido también.
}*/

let router = express.Router();

router.get('/', (req, res) => {
  res.json({ name: 'yape-api',version: "0.0.1"});
  res.sendFile(__dirname + 'src/index.html');  //Aquí funciona porque retorna el api, es válido de ambas formas. 
});

app.use('/api',apiUsers(router,db));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});


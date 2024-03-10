const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

//const [ , , arg3 = 'baxse=5' ] = process.argv;
//const [ , base = 10] = arg3.split('=');
//console.log(base);

//console.log( argv);

//console.log( 'base: yargs', argv.base);

crearArchivo (argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );



/*fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`Tabla-${base}.txt creado`);
} )*/
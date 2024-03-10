const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
        
    
    let salida = '';
    let consola = '';

    for(let i = 1; i<= hasta; i++ ){
        salida += (`${ base } X  ${ i } = ${ base * i }\n`);
        consola += (`${ base } ${'X'.red}  ${ i } ${'='.red} ${ base * i }\n`);
    }
    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

    if (listar) {
        console.log('==============='.green);
        console.log('Tabla del:'.red, colors.blue(base));
        console.log('==============='.green);
        console.log(consola);
    }
    
    return `Tabla-${base}.txt`;

}

module.exports = {
    crearArchivo
}
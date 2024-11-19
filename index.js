const { registrarCita, leerCitas } = require('./operaciones');
const argumentos = process.argv.slice(2);

if (argumentos[0].toLocaleLowerCase() === 'registrar') {
    registrarCita(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5]);
} else if (argumentos[0].toLocaleLowerCase() === 'leer') {
    console.log(leerCitas());
} else {
    console.log('Comando no reconocido, por favor ingrese "registrar" y los datos de la mascota o "leer" para ver las citas');
}

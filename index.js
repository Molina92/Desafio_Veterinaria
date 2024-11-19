const { registrarCita, leerCitas } = require('./operaciones');
const datos = process.argv.slice(2);

if (datos[0].toLocaleLowerCase() === 'registrar') {
    registrarCita(datos[1], datos[2], datos[3], datos[4], datos[5]);
} else if (datos[0].toLocaleLowerCase() === 'leer') {
    console.log(leerCitas());
} else {
    console.log('Comando no reconocido, por favor ingrese "registrar" y los datos de la mascota o "leer" para ver las citas');
}

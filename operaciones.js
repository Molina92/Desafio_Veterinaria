const fs = require('fs');

const registrarCita = (nombreMascota, edad, tipoMascota, color, enfermedad) => {

    let nuevaCita = {
        nombre: nombreMascota,
        edad: edad,
        tipo: tipoMascota,
        color: color,
        enfermedad: enfermedad
    }

    let citasActuales = [];
    if (fs.existsSync('citas.json')) {
        const citas = fs.readFileSync('citas.json', 'utf-8');
        citasActuales = citas ? JSON.parse(citas) : [];
    }

    citasActuales.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citasActuales, null, citasActuales.length));
    console.log('Cita registrada con éxito');

}

const leerCitas = () => {
    if (!fs.existsSync('citas.json')) {
        return 'No hay citas registradas';
    }
    
    let citas = fs.readFileSync('citas.json', 'utf-8');
    return JSON.parse(citas);
}

module.exports = { registrarCita, leerCitas };
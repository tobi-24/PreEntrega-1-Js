class doctor {
    constructor(nombre, diasAtencion, horarios, especialidad) {
        this.nombre = nombre;
        this.diasAtencion = diasAtencion;
        this.horarios = horarios;
        this.especialidad = especialidad;
    }
}

function agendarTurno(nombreDoctor, doctor) {
    console.log(`El ${nombreDoctor} está disponible los días ${doctor.diasAtencion.join(', ')} y los horarios son: ${doctor.horarios.join(', ')}`);
    let diaUsuario = prompt(`¿Qué día desea ser atendido/a por el ${nombreDoctor}?`);
    diaUsuario = diaUsuario.toLowerCase();

    if (!doctor.diasAtencion.includes(diaUsuario)) {
        console.log(`El día que seleccionó no se encuentra disponible`);
        return;
    }

    let horarioUsuario = prompt(`¿A qué hora desea su cita el día ${diaUsuario}?`);
    horarioUsuario = horarioUsuario.toUpperCase();

    if (!doctor.horarios.includes(horarioUsuario)) {
        console.log(`El horario que seleccionó no está disponible para el día ${diaUsuario}`);
    } else {
        alert(`Su cita fue agendada para el día ${diaUsuario} a las ${horarioUsuario} con el ${nombreDoctor}`);
    }
}

function filtrarPorEspecialidad(doctores, especialidad) {
    return doctores.filter(doctor => doctor.especialidad === especialidad);
}

function turnosMedicos() {
    let nombreUsuario = prompt(`Ingrese su nombre.`);
    console.log(`Bienvenido/a a la Agenda de Turnos Médicos, ${nombreUsuario}.`);

    let doctores = [
        new doctor("Dr. Pérez", ["martes", "jueves"], ["10:00 AM", "3:00 PM"], "Gastroenterología"),
        new doctor("Dr. Suárez", ["lunes", "miércoles"], ["9:00 AM", "2:00 PM"], "Traumatología"),
        new doctor("Dr. Juarez", ["miércoles", "sábados"], ["11:00 AM", "4:00 PM"], "Gastroenterología"),
        new doctor("Dr. Barrero", ["sábado", "domingo"], ["1:00 PM", "6:00 PM"], "Traumatología")
    ];

    while ('1','2'){
        console.log(`Lista de Especialidades Disponibles`);
        console.log(`• 1. Gastroenterología`);
        console.log(`• 2. Traumatología`);
        console.log(`• 3. Salir`);
        let numerosLista = prompt(`Ingrese el número de la especialidad que desea (o 3 para finalizar):`);

        if (numerosLista === "3") {
            console.log(`Muchas gracias por utilizar la Agenda de Turnos Médicos`);
            break;
        } else if (numerosLista === "1" || numerosLista === "2") {
            let especialidadSeleccionada = numerosLista === "1" ? "Gastroenterología" : "Traumatología";

            let doctoresEspecialidad = filtrarPorEspecialidad(doctores, especialidadSeleccionada);
            
            if (doctoresEspecialidad.length === 0) {
                console.log(`No hay doctores disponibles para la especialidad ${especialidadSeleccionada}`);
            } else {
                console.log(`Doctores disponibles para ${especialidadSeleccionada}:`);
                doctoresEspecialidad.forEach((doctor, index) => {
                    console.log(`• ${index + 1}. ${doctor.nombre}`);
                });

                let numerosDoctor = prompt(`Ingrese el número del doctor que desea (o cualquier otro número para volver a la selección de especialidades):`);
                numerosDoctor = parseInt(numerosDoctor);

                if (numerosDoctor >= 1 && numerosDoctor <= doctoresEspecialidad.length) {
                    const doctorSeleccionado = doctoresEspecialidad[numerosDoctor - 1];
                    agendarTurno(doctorSeleccionado.nombre, doctorSeleccionado);
                } else {
                    console.log(`La opción no es válida. Por favor, ingrese un número correcto`);
                }
            }
        } else {
            console.log(`La opción no es válida. Por favor, ingrese un número correcto`);
        }
    }
}

turnosMedicos();

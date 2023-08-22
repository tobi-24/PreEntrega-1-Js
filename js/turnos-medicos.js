function agendarTurno(nombreDoctor, diasDoctor){
    console.log('El Dr. ' +nombreDoctor + ' está disponible los dias ' + diasDoctor +'.');
    let diaUsuario = prompt ('¿Que día desea ser antendido/a por el Dr. ' + nombreDoctor + '?');
    diaUsuario = diaUsuario.toLocaleLowerCase();

    if (diasDoctor.includes(diaUsuario)){
        alert('Su turno fue agendado para el dia ' + diaUsuario + ' con el Dr. ' + nombreDoctor + '');
    } else{
        console.log('El día que selecciono no se encuentra disponible');
    }
}

function turnosMedicos(){
    let nombreUsuario = prompt ('Ingrese su nombre.');
    console.log ('Bienvenido/a a la Agenda de Turnos Médicos ' + nombreUsuario + '.' );
    while ('1','2'){
        console.log('Lista de Dr. disponibles');
        console.log('• 1. Doctor Pérez');
        console.log('• 2. Doctor Suárez');
        console.log('• 3. Salir');
        let numerosLista = prompt ('Ingrese el numero del Dr. que desea (o 3 para salir de la lista de opciones):');
        if(numerosLista === "1"){
            agendarTurno ("Perez", ["martes" , "jueves"]);
        } else if (numerosLista === "2"){
            agendarTurno("Suarez",["lunes" , "viernes"]);
        } else if (numerosLista === "3"){
            console.log ('Muchas gracias por utilizar la Agenda de Turnos Medicos');
            break;
        } else{
            console.log ('La opcion no es valida. Por favor, ingrese un numero correcto')
        }
    }
}

turnosMedicos();
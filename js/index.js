onload = principal;

const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dicimebre']

function principal() {
    let x = document.getElementById("formCalendario");
    x.style.display = "none";
    const fecha = new Date();
    const mesActual = mes[fecha.getMonth()];
    document.getElementById('mes').innerHTML = mesActual
    diaSemana(fecha.getDay(), fecha.getDate())
    fecha.setDate(fecha.getDate() - 1)
    console.log(fecha)
  
}

// const diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

// for (let i = 0; i < diasSemana.length; i++) {
//     let dia = (diaAct + i - diaSem + diasSemana.length) % diasSemana.length;
//     document.getElementById(diasSemana[i]).innerHTML = dia;
// }

function diaSemana(diaSem, diaAct) {
    console.log(diaAct - 1)
    switch (diaSem) {
        case 0://Domingo
            document.getElementById('domingo').innerHTML = diaAct;
            document.getElementById('lunes').innerHTML = diaAct - 6;
            document.getElementById('martes').innerHTML = diaAct - 5;
            document.getElementById('miercoles').innerHTML = diaAct - 4;
            document.getElementById('jueves').innerHTML = diaAct - 3;
            document.getElementById('viernes').innerHTML = diaAct - 2;
            document.getElementById('sabado').innerHTML = diaAct - 1;
            break;
        case 1: //lunes
            document.getElementById('lunes').innerHTML = diaAct;
            document.getElementById('martes').innerHTML = diaAct + 1;
            document.getElementById('miercoles').innerHTML = diaAct + 2;
            document.getElementById('jueves').innerHTML = diaAct + 3;
            document.getElementById('viernes').innerHTML = diaAct + 4;
            document.getElementById('sabado').innerHTML = diaAct + 5;
            document.getElementById('domingo').innerHTML = diaAct + 6;
            break;
        case 2://Martes
            document.getElementById('lunes').innerHTML = diaAct - 1;
            document.getElementById('martes').innerHTML = diaAct;
            document.getElementById('miercoles').innerHTML = diaAct + 1;
            document.getElementById('jueves').innerHTML = diaAct + 2;
            document.getElementById('viernes').innerHTML = diaAct + 3;
            document.getElementById('sabado').innerHTML = diaAct + 4;
            document.getElementById('domingo').innerHTML = diaAct + 5;
            break;
        case 3: //Miercoles
            document.getElementById('lunes').innerHTML = diaAct - 2
            document.getElementById('martes').innerHTML = diaAct - 1
            document.getElementById('miercoles').innerHTML = diaAct
            document.getElementById('jueves').innerHTML = diaAct + 1
            document.getElementById('viernes').innerHTML = diaAct + 2
            document.getElementById('sabado').innerHTML = diaAct + 3
            document.getElementById('domingo').innerHTML = diaAct + 4
            break;
        case 4: //Jueves
            document.getElementById('lunes').innerHTML = diaAct - 3;
            document.getElementById('martes').innerHTML = diaAct - 2;
            document.getElementById('miercoles').innerHTML = diaAct - 1;
            document.getElementById('jueves').innerHTML = diaAct;
            document.getElementById('viernes').innerHTML = diaAct + 1;
            document.getElementById('sabado').innerHTML = diaAct + 2;
            document.getElementById('domingo').innerHTML = diaAct + 3;
            break;
        case 5: //Viernes
            document.getElementById('lunes').innerHTML = diaAct - 4;
            document.getElementById('martes').innerHTML = diaAct - 3;
            document.getElementById('miercoles').innerHTML = diaAct - 2;
            document.getElementById('jueves').innerHTML = diaAct - 1;
            document.getElementById('viernes').innerHTML = diaAct;
            document.getElementById('sabado').innerHTML = diaAct + 1;
            document.getElementById('domingo').innerHTML = diaAct + 2;
            break;
        case 6: //Sabado
            document.getElementById('lunes').innerHTML = diaAct - 5
            document.getElementById('martes').innerHTML = diaAct - 4
            document.getElementById('miercoles').innerHTML = diaAct - 3
            document.getElementById('jueves').innerHTML = diaAct - 2
            document.getElementById('viernes').innerHTML = diaAct - 1
            document.getElementById('sabado').innerHTML = diaAct
            document.getElementById('domingo').innerHTML = diaAct + 1
            break;
    }
}

function actionToggle() {
    const action = document.querySelector('.action');
    action.classList.toggle('active')
}

function showFormCalendar() {
    let x = document.getElementById("formCalendario");
    let main = document.getElementById("principal")
    let header = document.getElementById("header")
    let navegacion = document.getElementById("navegacion")
    if (x.style.display === "none") {
        x.style.display = "block";
        main.setAttribute("class", "blur")
        header.setAttribute("class", "blur")
        navegacion.setAttribute("class", "blur")
    } else {
        x.style.display = "none";
        main.setAttribute("class", null)
        header.setAttribute("class", null)
        navegacion.setAttribute("class", null)
    }
}

let evento = false;
let tarea = false;
let cumple = false;

function formEvento() {
    evento = !evento;
    /*if(tarea == true || cumple == true){
        eliminarTarea()
        eliminarCumple()
    }*/
    tarea = false;
    cumple = false;
    if (evento == true && tarea == false && cumple == false) {
        let x = document.getElementById("formCalendario");
        let inputText = document.createElement("input");
        inputText.setAttribute("type", "text")
        inputText.setAttribute("placeholder", "Nombre evento")
        inputText.setAttribute("id", "nombreEvento")
        let inputHora = document.createElement("input");
        inputHora.setAttribute("type", "datetime")
        inputHora.setAttribute("placeholder", "Hora evento")
        inputHora.setAttribute("id", "horaEvento")
        let inputFecha = document.createElement("input")
        inputFecha.setAttribute("type", "date")
        inputFecha.setAttribute("id", "fechaEvento")
        let inputEnviar = document.createElement("input")
        inputEnviar.setAttribute("value", "Enviar evento")
        inputEnviar.setAttribute("type", "button")
        inputEnviar.setAttribute("id", "enviarEvento")
        x.appendChild(inputText);
        x.appendChild(inputHora)
        x.appendChild(inputFecha)
        x.appendChild(inputEnviar)
    } else {
        eliminarEvento()
    }

}
function formTarea() {
    tarea = !tarea;
    /*if(evento == true || cumple == true){
        eliminarEvento();
        eliminarCumple();
    }*/
    evento = false;
    cumple = false;
    if (tarea == true && evento == false && cumple == false) {
        let x = document.getElementById("formCalendario");
        let inputText = document.createElement("input");
        inputText.setAttribute("type", "text");
        inputText.setAttribute("placeholder", "Nombre Tarea");
        inputText.setAttribute("id", "nombreTarea");
        let inputEnviar = document.createElement("input");
        inputEnviar.setAttribute("value", "Enviar tarea");
        inputEnviar.setAttribute("type", "button");
        inputEnviar.setAttribute("id", "enviarTarea");
        x.appendChild(inputText);
        x.appendChild(inputEnviar);
    } else {
        eliminarTarea();
    }

}
function formCumple() {
    cumple = !cumple;
    /*if(evento == true || tarea == true){
        eliminarEvento();
        eliminarTarea();
    }*/

    evento = false;
    tarea = false;
    if (cumple == true && evento == false && tarea == false) {
        let x = document.getElementById("formCalendario");
        let inputText = document.createElement("input");
        inputText.setAttribute("type", "text");
        inputText.setAttribute("placeholder", "Nombre Cumpleañero");
        inputText.setAttribute("id", "nombreCumple");
        let inputEnviar = document.createElement("input");
        inputEnviar.setAttribute("value", "Enviar cumpleaños");
        inputEnviar.setAttribute("type", "button");
        inputEnviar.setAttribute("id", "enviarCumple");
        x.appendChild(inputText);
        x.appendChild(inputEnviar);
    } else {
        eliminarCumple()
    }

}

function eliminarEvento() {
    document.getElementById("nombreEvento").remove();
    document.getElementById("horaEvento").remove();
    document.getElementById("fechaEvento").remove();
    document.getElementById("enviarEvento").remove();
}

function eliminarTarea() {
    document.getElementById("enviarTarea").remove();
    document.getElementById("nombreTarea").remove();
}
function eliminarCumple() {
    document.getElementById("enviarCumple").remove();
    document.getElementById("nombreCumple").remove();
}

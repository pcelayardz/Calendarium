onload = principal;

function principal() {
    let x = document.getElementById("formCalendario");
    x.style.display = "none";
    const fecha = new Date();
    const mesActual = fecha.getMonth() + 1;
    document.getElementById('mes').innerHTML = mesToString(mesActual)
    diaSemana(fecha.getDay(), fecha.getDate())
}

function diaSemana(diaSem, diaAct) {
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

function mesToString(mes) {
    let month = ""
    switch (mes) {
        case 1:
            month = 'Enero';
            break;
        case 2:
            month = 'Febrero';
            break;
        case 3:
            month = 'Marzo';
            break;
        case 4:
            month = 'Abril';
            break;
        case 5:
            month = 'Mayo';
            break;
        case 6:
            month = 'Junio';
            break;
        case 7:
            month = 'Julio';
            break;
        case 8:
            month = 'Agosto';
            break;
        case 9:
            month = 'Septiembre';
            break;
        case 10:
            month = 'Octubre';
            break;
        case 11:
            month = 'Noviembre';
            break;
        case 12:
            month = 'Dicimebre'
            break;
    }

    return month;
}

function actionToggle() {
    const action = document.querySelector('.action');
    action.classList.toggle('active')
}

function showFormCalendar() {
    let x = document.getElementById("formCalendario");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function formEvento(){
    let x = document.getElementById("formCalendario");
    let inputText = document.createElement("input");
    inputText.setAttribute("type","text")
    inputText.setAttribute("placeholder","Nombre evento")
    inputText.setAttribute("id","nombreEvento")
    let inputHora = document.createElement("input");
    inputHora.setAttribute("type","datetime")
    inputHora.setAttribute("placeholder","Hora evento")
    inputHora.setAttribute("id","horaEvento")
    let inputFecha = document.createElement("input")
    inputFecha.setAttribute("type","date")
    inputFecha.setAttribute("id","fechaEvento")
    let inputEnviar = document.createElement("input")
    inputEnviar.setAttribute("value","Enviar evento")
    inputEnviar.setAttribute("type","button")
    inputEnviar.setAttribute("id","enviarEvento")
    x.appendChild(inputText);
    x.appendChild(inputHora)
    x.appendChild(inputFecha)
    x.appendChild(inputEnviar)
}
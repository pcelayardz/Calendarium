// Obtener elementos del DOM
const monthYear = document.getElementById("month-year");
const calendarBody = document.getElementById("calendar-body");
const prevMonthBtn = document.getElementById("prev-month-btn");
const nextMonthBtn = document.getElementById("next-month-btn");

// Configuración inicial del calendario
let fecha = new Date();
let currentMonth = fecha.getMonth();
let currentYear = fecha.getFullYear();
console.log(currentMonth, currentYear)

//Para saber la fecha actual
let dateToday = new Date();

// Función para actualizar el calendario
function updateCalendar() {
    // Actualizar el encabezado del mes y año
    monthYear.innerText = `${getMonthName(currentMonth)} ${currentYear}`;

    // Obtener el número de días en el mes actual
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);

    // Obtener el primer día del mes actual
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // Limpiar el cuerpo del calendario
    calendarBody.innerHTML = "";

    // Agregar los días al calendario
    let contDias = 1;
    for (let i = 0; i < 6; i++) {
        // Crear una fila en la tabla
        let row = document.createElement("tr");
        // Agregar celdas a la fila
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay-1 ) {
                // Agregar celdas vacías para los días antes del primer día del mes
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (contDias > daysInMonth) {
                // Agregar celdas vacías para los días después del último día del mes
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else {
                // Agregar celdas para los días del mes actual
                let cell = document.createElement("td");
                let cellText = document.createTextNode(contDias);
                if (contDias === dateToday.getDate() && currentMonth === dateToday.getMonth() && currentYear === dateToday.getFullYear()) {
                    // Resaltar el día actual
                    cell.classList.add("diaActual");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                contDias++;
            }
        }
        // Agregar la fila al cuerpo del calendario
        calendarBody.appendChild(row);
    }
}

// Función para obtener el número de días en un mes dado
function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

// Función para obtener el nombre de un mes dado
function getMonthName(month) {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return monthNames[month];
}

// Función para avanzar al mes siguiente
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
}

// Función para retroceder al mes anterior
function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
}

updateCalendar()
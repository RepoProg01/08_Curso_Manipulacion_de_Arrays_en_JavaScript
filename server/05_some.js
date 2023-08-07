const numbers = [1,2,3,4,5];

let estatus = false;

for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        estatus = true;
    }
}

console.log(estatus);

const metSome = numbers.some(item => item % 2 === 0);

console.log(metSome);

// ----------------- con un array de objetos ------------------

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        deliver: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        deliver: true,
    },
    {
        customerName: "Santiago",
        total: 180,
        deliver: false,
    },
    {
        customerName: "Santiago",
        total: 280,
        deliver: true,
    },
];

const arraySome = orders.some(item => item.total < 50);
console.log(arraySome);

// ---------------ejemplo 2 con fechas---------------------
// import {areIntervalsOverlapping} from 'date-fns'
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 16, 20),
      endDate: new Date(2021, 1, 17, 21),
      title: "Cena",
    },
];

const newApoinment = {
    startDate: new Date(2021, 1, 1, 12),
    endDate: new Date(2021, 1, 1, 20)
}

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const overlap = (newData => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newData.startDate, end: newData.endDate},
        )
    })
})

console.log(overlap(newApoinment));

// console.log(areIntervalsOverlapping(
//     {start: dates[0].startDate, end: dates[0].endDate},
//     {start: newApoinment.startDate, end: newApoinment.endDate},
// ));
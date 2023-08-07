
// --------------------------------------------------------
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const objectMonths = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
};

const months2 = Object.keys(objectMonths).sort((a,b) => a-b).map(item => objectMonths[item]);
console.log(months2);


console.log("-".repeat(30));
// --------------------------------------------------------
const numbers = [1, 30, 4, 21, 100000];
console.log(numbers);
numbers.sort((a,b) => a - b );
console.log(numbers);
console.log("-".repeat(30));

// --------------------------------------------------------
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort();
console.log(words);
console.log("-".repeat(30));
// --------------------------------------------------------

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a,b) => a.total - b.total);
console.log(orders);
console.log("-".repeat(30));
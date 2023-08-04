// --------------array---------------
const array = ['Luis','Pedro','Maria','Pancha'];


// ----- Usando un regular for ------
// ------------arrayCopy-------------
const arrayCopy = [];
for(let i = 0; i < array.length; i++){
    arrayCopy.push(array[i] + " " + i );
};

// ------- print original array --------
console.log(array);
// --------- print copy array ----------
console.log(arrayCopy);


// ------------ Usando map -------------
// ------------ array copy -------------
const array3 = array.map((item)=> item + " " + "copy" );

console.log(array);
console.log(array3);


// ------- Usando map con objetos y mostrando en html --------
//const result = document.querySelector(".result");
const array4 = [
    {title: "Burger", price: 123},
    {title: "Pizza", price: 23},
];

const array5 = array4.map((item)=> {
    // return `<li>${item.title} ${item.price}</li>`
    return `${item.title} ${item.price} <br>`
});
//result.innerHTML = array5.join(" ");
console.log(array5);

// -------------- ejemplo 2 -----------------

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
        deliver: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        deliver: true,
    }
];

// const order = orders.map(items => items.total);
// console.log(order);

const order = orders.map(item =>{
    return {
        ...item, 
        impuesto: 14
    }
});

console.log(order);
console.log(orders);



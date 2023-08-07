const array = [1,3,5,3,34,23,52];

let resultado = undefined;

for(let i=0; i<array.length; i++){
    const valor = array[i];
    if(valor === 30){
        resultado = valor;
        break;
    }
}

console.log(resultado);

// undefined

// ---------------usando find----------------

const respuesta2 = array.find(item => item == 34);

console.log(respuesta2);

// ------------------ con objetos--------------------------

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 23,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

function buscar(precio){
    for(let i=0; i<products.length; i++){
        if(products[i].price === precio){
            return products[i];
        }
    }
}

console.log(buscar(23));


const buscar2 = products.findIndex(item => item.id == "🌭");
console.log(buscar2);

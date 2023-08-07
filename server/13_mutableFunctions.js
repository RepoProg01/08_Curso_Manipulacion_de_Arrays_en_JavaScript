const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

const product = products.findIndex(item => item.title === "Pizza");
if(!(product == -1)){
    myProducts.push(products[product]);
    products.splice(product, 1);
}else{
    console.log("Producto no encontrado");
};

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "Exelent"
    }
}

const updates = products2.findIndex(iter => iter.id === "🥞");
products2[updates] = {
    ...products2[updates],
    ...update.changes
}

console.log(products2);
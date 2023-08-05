## forEach

ForEach método útil para recorrer un array y realizar alguna operación sobre cada elemento del mismo

### forma tradicional
```javascript
const array = ["a","b","c","d"];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// a
// b
// c
// d
```

### Usando un foreach con un array
```javascript
const array = ["a","b","c","d"];

array.forEach(item => console.log(item));

// a
// b
// c
// d
```

### Usando un forEch con un array de objetos
```javascript
const result = document.querySelector(".result");

const array2 = [
    {title: "Burger", price: 123},
    {title: "Pizza", price: 23}
];


array2.forEach(objeto => result.innerHTML += `<li>${objeto.title} ${objeto.price}</li>`);

// Burger 123
// Pizza 23
```
## Mutable Inmutable

### En JS los datos asignados a una variable pueden ser de dos tipos:

Primitive type (undefined, null, boolean, number, string, symbol), Reference type (objects, arrays , functions).
Una de las diferencia entre estas dos, está en la forma como se almacenan estos datos en memoria, para ser más claro un ejemplo:

```javascript
let name = 'Javier';

let name2 = name;

let person = {name: 'javier'};

let person2 = person;
```
Cuando creamos name js crea un espacio en memoria y guarda su valor, ahora cuando creamos name2 js continúa crea un nuevo espacio en memoria y asigna el mismo valor de la varible name de esta forma el valor de la variable name2 es totalmente independiente a name.

Ahora si creamos la variable person como un objeto que contiene un name, y si luego creamos otra variable person2 y le asignamos el mismo objeto person, aquí es donde la cosa cambia con respectos a los datos primitivos, en este caso js guardara el objeto person2 como una referencia o apuntador al objeto person, es decir que ambas variables apuntan al mismo objeto en memoria.

Ahora si entendamos Mutable o Inmutable.

Mutable: es algo que se puede cambiar o agregar.

Inmutable: es algo que no puede cambiar ni agregar.

Los valores primitivos en js son algo agregado donde solo se pueden reasignar y por lo tanto, todos estos valores son inmutables. Entendamos con un ejemplo.

```javascript
console.log(name); //javier
console.log(name2); //javier

name2 = 'platzi';

console.log(name); //javier
console.log(name2); //platzi''
```

Si imprimimos name y name2, ambas nos dan javier, pero si reasignamos un valor de name2 y volvemos a imprimir ocurre que solo cambia el valor de name2, lo que demuestra que js guardas estás variables de forma separada, aun cuando el valor de name2 se copio de name. Por eso los valores primitivos son inmutables.

ahora hagamos lo mismo con los objetos.

```javascript
console.log(person); //{name: 'javier'}
console.log(person2); //{name: 'javier'}

person2.name = 'platzi';

console.log(person); //{name: 'platzi'}
console.log(person2); //{name: 'platzi'}
```

Al inicio obtenemos las mismas propiedades, ahora cambiemos una de las valores de las propiedades y veremos que js cambio el valor tanto de person y peron2, esto debido a que person2 se creo haciendo referencia al objeto person, con reference type js crea una referencia al mismo objeto y el objeto permanece mutable.

ya que el mismo objeto es mutable se puede cambiar o se pueden agregar nuevas propiedades al mismo objeto.

En es6 se creo un operador de propagación que permirte copias un objeto de forma segura sin hacer referencia al mismo objeto y sería así.

```javascript
let person2 = {...person}
```

## map (INMUTABLE)

.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
.
Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.

### copiando un array sin afectar el original de la forma tradicional

```javascript
const array = ['Luis','Pedro','Maria','Pancha'];

const arrayCopy = [];
for(let i = 0; i < array.length; i++){
    arrayCopy.push(array[i] + " " + i );
};

console.log(array);
console.log(arrayCopy);

// ['Luis', 'Pedro', 'Maria', 'Pancha']
// ['Luis 0', 'Pedro 1', 'Maria 2', 'Pancha 3']
```

### Usando map

```javascript
const array = ['Luis','Pedro','Maria','Pancha'];
const array3 = array.map((item)=> item + " " + "copy" );

console.log(array);
console.log(array3);

// ['Luis', 'Pedro', 'Maria', 'Pancha']
// ['Luis copy', 'Pedro copy', 'Maria copy', 'Pancha copy']
```

## Usunado map en array de objetos

```javascript
const result = document.querySelector(".result");
const array4 = [
    {title: "Burger", price: 123},
    {title: "Pizza", price: 23}
];

const array5 = array4.map((item)=> {
    return `<li>${item.title} ${item.price}</li>`;
});
result.innerHTML = array5.join(" ");
```

### Con objetos y agregando

```javascript
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

const order = orders.map(item =>{
    return {
        ...item, 
        impuesto: 14
    }
});

console.log(orders);
// [
//   { customerName: 'Nicolas', total: 60, deliver: true },
//   { customerName: 'Zulema', total: 120, deliver: true },
//   { customerName: 'Santiago', total: 180, deliver: true },
//   { customerName: 'Valentina', total: 240, deliver: true }
// ]
console.log(order);
// [
//   { customerName: 'Nicolas', total: 60, deliver: true, impuesto: 14 },
//   { customerName: 'Zulema', total: 120, deliver: true, impuesto: 14 },
//   { customerName: 'Santiago', total: 180, deliver: true, impuesto: 14 },
//   { customerName: 'Valentina', total: 240, deliver: true, impuesto: 14 }
// ]
```

## filter (INMUTABLE)

filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.

Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

* cero coincidencias
* todas coincidencias
* algunas coincidencias

Pero nunca más coincidencias que el tamaño del array original.

### usando un ciclo for regular

```javascript
const words = ["spray", "limit", "elite", "exuberant"];

// con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}
```

### Con filter

```javascript
const words = ["spray", "limit", "elite", "exuberant"];

const mayor = words.filter(item => (item.length >= 6));

console.log(mayor);
```

## fiter usando un array de objetos

```javascript
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
        customerName: "Valentina",
        total: 240,
        deliver: true,
    }
];

const delivered = orders.filter(item => item.deliver == true);
console.log(delivered);

// [
//     {customerName: 'Nicolas', total: 60, deliver: true} 
//     {customerName: 'Zulema', total: 120, deliver: true}
//     {customerName: 'Valentina', total: 240, deliver: true}
// ]
```

## Usando filter como buscador

```javascript
const search = (query) => {
    return orders.filter(item => item.customerName.includes(query));
}

console.log(search("San"));

// [
//    {customerName: 'Santiago', total: 180, deliver: false}
//    {customerName: 'Santiago', total: 280, deliver: true}
// ]
```

## reduce

Este metodo reduce a un solo valor y no devuelve otro array, simplemente un valor. Se usa para hacer cálculos a partir de la información de un array.

Composicion:
* 1° parametro El acumulador
* 2° parametro el elemento
* 2° Argumento: EL estado inicial

```javascript
const numbers = [1,2,3,4,5,6,7,8,9];

const total = numbers.reduce((acumulador, num) => acumulador + num, 0);

console.log(total);
// 45
```

### Reduciendo array a un objeto

```javascript
const array = [1,2,3,1,2,2,2,3,3,3];

const object = array.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    }
    else{
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});

console.log(object);

// {1: 2, 2: 4, 3: 4}
```

### Mezclando metodos 

```javascript
const objeto2 = [
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    },
    {
        name: "Zulema",
        level: "hight"
    },
    {
        name: "Pedro",
        level: "low"
    },
    {
        name: "Maria",
        level: "medium"
    },
    {
        name: "Fernando",
        level: "medium"
    },
];

const levels = objeto2
.map(lev => lev.level)
.reduce((levObj, levDesc) => {
    if(!levObj[levDesc]){
        levObj[levDesc] = 1;
    }else{
        levObj[levDesc] = levObj[levDesc] + 1;
    }
    return levObj;
},{})

console.log(levels);

// {
//    low: 2, 
//    medium: 3, 
//    hight: 1
// }
```
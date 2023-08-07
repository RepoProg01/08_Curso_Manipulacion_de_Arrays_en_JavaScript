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

## reduce (INMUTABLE)

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

## some (INMUTABLE)

Este método nos devuelve true o false sí al menos 1 elemento de nuestro array cumple con la condición.

### con un array regular
Forma tradicional con un for:

```javascript
const numbers = [1,2,3,4,5];

let estatus = false;

for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        estatus = true;
    }
}
console.log(estatus);
// true
```
Usando some

```javascript
const numbers = [1,2,3,4,5];
const metMap = numbers.some(item => item % 2 === 0);

console.log(metMap);
// true
```
### con un array de objetos

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
        customerName: "Santiago",
        total: 280,
        deliver: true,
    },
];

const arraySome = orders.some(item => item.total < 50);
console.log(arraySome);
// true
```

## every (INMUTABLE)

Este método es el contrario a some(), devuelve true o false sí TODOS los elementos del array cumplen la condición.

```javascript
const lista = ["luis", "pedro", "juana", "maria"];
const check = lista.every(item => item.length > 3);
console.log(check);

// true

//  ejemplo2

const lista2 = [12,33,43,22,55,23,12,34,43,33];
const check2 = lista2.every(item => item < 55);
console.log(check2);

// false
```

## find y findIndex

El método find() devuelve el primer elemento del array que cumpla con la condición dada o no devuelve undefined si es que no encuentra ningún elemento que cumpla los requisitos pedidos.

```javascript
const array = [1,3,5,3,34,23,52];

// ---------------USANDO FOR----------------

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

// ---------------USANDO FIND----------------

const respuesta2 = array.find(item => item == 34);

console.log(respuesta2);

// 34
```

### findIndex

findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
```javascript
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

  const buscar2 = products.findIndex(item => item.id == "🌭");
  console.log(buscar2);

  // 2

```

## includes

El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda.

### Nota:
### some() e includes() pareciera que hacen lo mismo ya que ambos regrezan un true o false y tambien solamente el primero que encuentran  pero la diferencia es que:
* some() 
    * verifica si algún elemento de un arreglo cumple con la condición que le pases. 
    
* includes() 
    * únicamente revisa si un elemento existe en tu arreglo. 

```javascript
const pets = ["cat","dog","fish"];

// ----------- Con un for tradicional ------------
let resultado = false;

for(let i=0; i<pets.length; i++){
    const valor = pets[i];
    if(valor == "dog"){
        resultado = true;
        break;
    }
}

console.log(resultado);

// true 
```

### Usando includes

```javascript
const pets = ["cat","dog","fish"];
const result = pets.includes("dog");
console.log(result);

// true
```

## join

El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

### Usando un for tradicional

```javascript
const elements = ["fire", "air", "water"];

const separator = "-"
let result ="";
for(let i=0; i<elements.length; i++){
    const element = elements[i];
    if((elements.length - 1) === i){
        result += element;
    }else{
        result += element + separator;
    }
}
 console.log(result);

// fire-air-water


```

### Usando join 

```javascript
const elements = ["fire", "air", "water"];
const result2 = elements.join("-");
console.log(result2);

// fire-air-water
```

## split

Split: Transforma un string a un array dada un patro para hacer la separacion de elementos en el array

```javascript
const title = "Curso de manipulacion de arrays";
const title2 = title.split(" ");
console.log(title2);

// ['Curso', 'de', 'manipulacion', 'de', 'arrays']
```

## split(""), join(""), toUpperCase(), toLowerCase(), replaceAll("","")
```javascript
const title = "Curso de Manipulacion de Arrays";

const title2 = title.split(" ");
console.log(title2);
// ['Curso', 'de', 'manipulacion', 'de', 'arrays']

const title3 = title2.join(" ");
console.log(title3);
// Curso de manipulacion de arrays

const title4 = title3.toUpperCase();
console.log(title4);
// CURSO DE MANIPULACION DE ARRAYS

const title5 = title.toLowerCase();
console.log(title5);
// curso de manipulacion de arrays

const title6 = title.replaceAll(" ", "-");
console.log(title6);
// Curso-de-Manipulacion-de-Arrays
```

## concat (INMUTABLE)

Método concat: fusiona arrays. Es inmutable (no modifica el array original).

```javascript
const array1 = [1,1,2,2];
const array2 = [3,3,4,4];

const array3 = [...array1 , ...array2];
console.log(array3);
// [1, 1, 2, 2, 3, 3, 4, 4]

const array4 = array1.concat(array2);
console.log(array4);
// [1, 1, 2, 2, 3, 3, 4, 4]

array1.push(5);
array2.push(8);

console.log(array1);
// [1, 1, 2, 2, 5]
console.log(array2);
// [3, 3, 4, 4, 8]
console.log(array3);
// [1, 1, 2, 2, 3, 3, 4, 4]
console.log(array4);
// [1, 1, 2, 2, 3, 3, 4, 4]
```
### Una forma de concatenar dos arrays pero sin elemtos repetidos es utilizando set() junto el operador de propagacion ejemplo:

```javascript
const arrayA = ["PHP","Java","Javascript"];
const arrayB = ["CSS","HTML","PHP","Javascript"];

const unicos = [...new Set([...arrayA, ...arrayB])];

console.log(unicos);

// [ 'PHP', 'Java', 'Javascript', 'CSS', 'HTML' ]
```
## flat

### Usando una funcion recursiva

```javascript
const matriz = [
    [1,2,3],
    [4,5,6, [1,2 ,[1,2]]],
    [7,8,9]
];

const arrayFlt = [];
function recursive(matriz){
    for (let item of matriz) {
        if(item.length > 1){
            recursive(item);
        }else{
            arrayFlt.push(item);
        }
    }
}

recursive(matriz);
console.log(arrayFlt);

// [1, 1, 2, 2, 3, 3, 4, 4]
```
### Ejemplo de otra forma recursiva

```javascript
const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(matriz);

console.log(newArray);

// [1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9]
```

### Usando otra forma recursiva

```javascript
const array =  [1, [2,3], [4,[5,[6]]]] ;
function flatten(array){
    return array.reduce((ac, it)=>ac.concat(Array.isArray(it) ? flatten(it) : it),[]);
}

console.log(flatten(array));

// [ 1, 2, 3, 4, 5, 6 ]
```

### Usando flat()
```javascript
const matriz = [
    [1,2,3],
    [4,5,6, [1,2 ,[1,2]]],
    [7,8,9]
];

const flatArray = matriz.flat(3);
console.log(flatArray);

// [1, 1, 2, 2, 3, 3, 4, 4]
```
## flatMap

## Combinando metodos

```javascript
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ];

  const atribut = users.map(iter => iter.attributes).flat(2);

  console.log(atribut);

  // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
```

## Con flatMap

```javascript
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ];

  const atribut = users.flatMap(iter => iter.attributes);

  console.log(atribut);

  // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
```
### Ejemplo 2 

Podemos utilizar flatMap aqui pero nos daria un resultado equivocado ya que flatMap primero ejecuta el map() y despues el flat 

```javascript
  const calendars = {
    primaryCalendar: [{
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],


    secondaryCalendar: [{
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const fechas = Object.values(calendars).flat().map(iter => iter.startDate);
  console.log(fechas);
```
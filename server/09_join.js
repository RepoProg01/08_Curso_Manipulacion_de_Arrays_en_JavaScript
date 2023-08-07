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

// ------------------- usando join -----------------------
const result2 = elements.join("-");
console.log(result2);

// fire-air-water
// ----------------- ejemplo 2 -----------------------

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

const title6 = title5.charAt(0).toUpperCase() + title5.slice(1);
console.log(title6);


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

const result = pets.includes("dog");
console.log(result);
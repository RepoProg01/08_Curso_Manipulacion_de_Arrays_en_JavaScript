const matriz = [
    [1,2,3],
    [4,5,6, [1,2 ,[1,2]]],
    [7,8,9]
];

// Usando una funcion recursiva

let arrayFlt = [];
function recursive(mtr){
    for (let item of mtr) {
        if(item.length > 1){
            recursive(item);
        }else{
            arrayFlt.push(item);
        }
    }
}
recursive(matriz);
console.log(arrayFlt);

// --------------------------------------
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log(newArray);
// --------------------------------------
const flatArray = matriz.flat(3);
console.log(flatArray);



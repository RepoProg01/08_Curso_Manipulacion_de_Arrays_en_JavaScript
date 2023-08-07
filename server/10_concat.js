const array1 = [1,1,2,2];
const array2 = [3,3,4,4];

const array3 = [...array1 , ...array2];
console.log(array3);

const array4 = array1.concat(array2);
console.log(array4);

array1.push(5);
array2.push(8);

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);




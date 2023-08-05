const numbers = [1,2,3,4,5,6,7,8,9];

const total = numbers.reduce((acumulador, num) => {
    return acumulador + num;
},0);

console.log(total);
// 45

// ----------- ejemplo 2 -----------

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

// ----------- ejemplo 3 -----------

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

// ----------- ejemplo 4 -----------

const positions = [];

function random(max, min){
    for(let i=0; i<20; i++){
        positions.push(Math.floor(Math.random()* (max - min + 1) + 1));
    }
};

random(10, 1);

const group = positions.reduce((objGroup, itemGroup) => {
    if(itemGroup <= 5){
        objGroup["1-5"] += 1;
    }
    else if(itemGroup >= 6 && itemGroup <= 8){
        objGroup["6-8"] += 1;
    }
    else if(itemGroup >= 9 && itemGroup <= 10){
        objGroup["9-10"] += 1;
    }
    return objGroup;
},{
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
});
console.log(positions);
console.log(group);


const lista = ["luis", "pedro", "juana", "maria"];
const check = lista.every(item => item.length > 3);
console.log(check);

const lista2 = [12,33,43,22,55,23,12,34,43,33];
const check2 = lista2.every(item => item < 55);
console.log(check2);

// ---------------- ejemplo 3 -------------------

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const verificar = team.every(item => item.age <= 15);
  console.log(verificar);

  team.length
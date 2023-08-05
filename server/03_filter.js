const word = ["spray", "limit", "elite", "exuberant"];
//-------------------------------------------------------
// // con for
// const newArray = [];
// for (let index = 0; index < word.length; index++) {
//   const element = word[index];
//   if (element.length >= 6) {
//     newArray.push(element);
//   }
// }
// console.log(newArray);

//-------------------------------------------------------
// const words = ["spray", "limit", "elite", "exuberant"];
// const mayor = words.filter(item => (item.length >= 6));
// console.log(mayor);

//--------------------------------------------------------

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

// const delivered = orders.filter(item => item.deliver == true && item.total > 100);
// console.log(delivered);

const search = (query) => {
    return orders.filter(item => item.customerName.includes(query));
}

console.log(search("San"));




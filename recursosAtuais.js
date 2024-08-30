// let squared = 2 ** 3; // 8
// let numbers = [1, 2, 3,'Ola'];
// let includesTwo = numbers.includes("Ola"); // true
// console.log(includesTwo)

// async function fetchData() {
//     let response = await
//         fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
// }
// fetchData();

let person = { name: "John", age: 30 };
let entries = Object.entries(person); // [ ["name","John"], ["age", 30] ]
let values = Object.values(person); // [ "John", 30 ]
console.log(entries)
console.log(values)

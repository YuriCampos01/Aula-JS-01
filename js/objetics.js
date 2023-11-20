// Criando um objeto
const user = {
    name: "Yuri",
    Age: 23
};

// Obtendo os valores

console.log(Object.values(user));

// Obtendo as chaves
console.log(Object.keys(user));

// Destructuring 
const userCopy = { ... user};

const numbers = [1, 2, 3, 4, 5];
const numbersCopy = [ ... numbers ];

let number = 2;
let numberCopy = number;
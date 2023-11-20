// Principios de programação funcional 

// 1) Imutabilidade
// 2) Funçoes puras

const people = [
    {name: "Yuri", age: 22},
    {name: "jonh", age: 16},
    {name: "will", age: 23}
];

// Map
const peopleNames = people.map((person, index) => `Cliente ${index + 1}: ${person.name}`);

// Filter
const minors = people.filter(person => person.age < 18);

// Reduce 
// accumulator = 22
// acumulator = 22 + 16 = 38
// accumulator == 38 + 23 = 61
const sumOFAges = people.reduce((accumulator, person) => accumulator + person.age, 0);

// Sort 
peopleOrderByAge = [ ... people].sort((a, b) => a.age - b.age);
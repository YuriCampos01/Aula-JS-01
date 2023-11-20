// Criando um array
const colors = ["red", "green", "blue", "white"];

// O tamanho do array
console.log(colors.length);

// Adicionar elementos
colors.push("yellow");

// Fatiamento do array

console.log(colors.slice(0, 2));

// Remover um elemento do array
colors.pop();

// Remover um elemento
colors.splice(0, 1);

// Iterando em um array
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (let color of colors) {
    console.log(color);
}

colors.forEach((item, index, array) => {
    console.log(`${item} está no indice ${index} do array ${array}`);
});

colors.forEach(color => {
    console.log(`cor ${color}`);
});
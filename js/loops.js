// WHILE

let i = 0; // variavel
while (i < 3) {
    alert(i);
    i += 1;
    // i += 1
}

// FOR (COMEÇO; CONDIÇÃO; INCREMENTO)
for (let i = 0; i < 3; i ++) {
    alert(i);
}

let sum = 0;
while (true) {
    const value = +prompt("Digite um número");

    if (!value) break;

    sum += value;
}

alert(`O resultado da soma foi: ${sum}`);



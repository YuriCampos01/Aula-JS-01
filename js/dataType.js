// Tipos de Dados
/*
    number -> Valor numérico
    string -> Caracteres
    boolean -> Verdadeiro ou Falso
    null -> Vazio (None)
    indefined -> Quando não é atribuido nenhum valor

*/


//

// var valor = 1;
let number = 1;
let string = "Hello World";
let boolean = true;
let nothing = null;
let notDefined;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof nothing);
console.log(typeof notDefined);

// type casting
console.log(typeof String(number));
console.log(typeof Number("10.2"));
console.log(+"10.a");

const ANO_ATUAL = 2023;
ANO_ATUAL = 2024;
console.log(ANO_ATUAL);
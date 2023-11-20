/**
 * Mostra uma mensagem no navegador.
 * @param {string} from - Quem está enviando a mensagem.
 * @param {string} message - Mnesagem que será enviada.
 */

function showMessage(from, message = "Mensagem não fornecida") {
    alert(`${from}: ${message}`);
}

// showMessage("Yuri", "Declarando funções");
// showMessage("Desconhecido");

// sintaxe normal
// function sum(n1, n2) {
//     return n1 + n2;
// }

// sintaxe arrow function
/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
const sum = (n1, n2) => n1 + n2;

console.log(sum(10, 2));

// Multiline arrow function
const double = n => {
    const resultado = n * 2;
    return resultado;
}

console.log(double(8));

// Função anônima

const quadrado = function(n) {
    return n * n;
}

console.log(quadrado(5))

// IIFE 
(function() {
    alert("IIFE");
})();

// IIFE com Arrow Function
(() => {
    alert("IIFE com arrow function");
})();
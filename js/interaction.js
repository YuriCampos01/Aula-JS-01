alert("Hello, baby!");

const birthYear = prompt("Qual ano você nasceu?");
const currentYear = prompt("Qual é o ano atual?", new Date().getFullYear());

const age = currentYear - birthYear;
alert(`Você tem ${age} anos de idade!`);

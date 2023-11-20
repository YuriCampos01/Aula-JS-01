const JavaScriptAge = +prompt("Quantos anos o JavaScript possui?");
if(JavaScriptAge > 27) {
    alert("A idade digitada é amior do que a real!");
} else if(JavaScriptAge < 27) {
    alert("A idade digitada é menor do que a real!");
} else {
    alert("Você acertou!");
}

const CurrentHour = new Date().getHours();


// && (AND)
if (CurrentHour > 7 && CurrentHour < 19){
    alert("O escritório está abert");
} else {
    alert("O escritório está fechado")
}

// || (OR)

if (CurrentHour < 8 || CurrentHour > 18) {
    alert("O escritório esta fechado");
} else {
    alert("O escritório esta aberto!")
}

// NOT
alert(!true);

// 0 = janeiro
// 1 = fevereiro
const CurrentMonth = new Date().getMonth();
switch (CurrentMonth) {
    case 1:
        alert("Janeiro");
        break;
    case 2:
        alert("fevereiro");
        break;
    case 3:
        alert("Março");
        break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        alert("Outros meses");
        break;

    default:
        alert("Opção invalida!")
        break;
}


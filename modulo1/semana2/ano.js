//Calculo de diferença do ano digitado
const ano = prompt("Digite um ano:");
const atual = new Date().getFullYear();

diferenca = atual - parseInt(ano);

alert("Diferença: " + diferenca + " anos.")

//Incremento e decremento de valores
let resultado = 0;
let valor = document.getElementById("valor");

let incremento = document.getElementById("incremento");
let decremento = document.getElementById("decremento");

incremento.addEventListener("click", function(){
    resultado += parseInt(incremento.value);
    valor.innerText = resultado;
});

decremento.addEventListener("click", function(){
    resultado += parseInt(decremento.value);
    valor.innerText = resultado;
});


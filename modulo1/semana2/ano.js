const ano = prompt("Digite um ano:");
const atual = new Date().getFullYear();

diferenca = atual - parseInt(ano);

alert("Diferença: " + diferenca + " anos.")

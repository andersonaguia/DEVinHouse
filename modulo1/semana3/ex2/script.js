var titulo = document.querySelector("#titulo");
console.log(titulo);

var titulo = document.querySelector(".texto");
console.log(titulo);

var titulo = document.querySelectorAll(".texto");
console.log(titulo);

var titulo = document.getElementById("titulo");
console.log(titulo);

/*InteraÃ§Ã£o com o usuÃ¡rio. Recebe o valor digitado pelo usuÃ¡rio e imprime na tag com o id=titulo, neste caso.*/
var nome = prompt("Qual Ã© o seu nome?");
titulo.innerText = "OlÃ¡, " + nome;
console.log = nome;


//Adicionando valores ao documento HTML

var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
    ];
    
    listaConvidados.forEach(function(valor, i){  
        item = document.createElement("li"); //Cria um elemento <li> no documento HTML
        nome = listaConvidados[i].nome + " " + listaConvidados[i].sobrenome; //Guarda os valores contidos no índice [i] do array, dentro das chaves '.nome' e '.sobrenome' do objeto contido nesse índice dentro de uma variável chamada 'nome'
        item.textContent = nome; //Adiciona ao item o conteúdo contido na variável 'nome'
        lista1.appendChild(item); //Adiciona o conteúdo contido na variável 'item' ao documento HTML                
    });
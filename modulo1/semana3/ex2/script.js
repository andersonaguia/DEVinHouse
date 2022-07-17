var titulo = document.querySelector("#titulo");
console.log(titulo);

var titulo = document.querySelector(".texto");
console.log(titulo);

var titulo = document.querySelectorAll(".texto");
console.log(titulo);

var titulo = document.getElementById("titulo");
console.log(titulo);

/*Interação com o usuário. Recebe o valor digitado pelo usuário e imprime na tag com o id=titulo, neste caso.*/
var nome = prompt("Qual é o seu nome?");
titulo.innerText = "Olá, " + nome;
console.log = nome;


//Adicionando valores ao documento HTML

var listaConvidados = [
    { nome: "Jos�", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cl�udia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
    ];
    
    listaConvidados.forEach(function(valor, i){  
        item = document.createElement("li"); //Cria um elemento <li> no documento HTML
        nome = listaConvidados[i].nome + " " + listaConvidados[i].sobrenome; //Guarda os valores contidos no �ndice [i] do array, dentro das chaves '.nome' e '.sobrenome' do objeto contido nesse �ndice dentro de uma vari�vel chamada 'nome'
        item.textContent = nome; //Adiciona ao item o conte�do contido na vari�vel 'nome'
        lista1.appendChild(item); //Adiciona o conte�do contido na vari�vel 'item' ao documento HTML                
    });
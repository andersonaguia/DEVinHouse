const contasClientes = [
    {
        id: 1,
        nome: "Anderson Aguiar",
        saldo: 500,
    },
    {
        id: 2,
        nome: "Patrícia Rocha",
        saldo: 3000,
    },
    {
        id: 3,
        nome: "Alisson Thiago",
        saldo: 5000,
    },    
];

const conta = document.getElementById("conta");
conta.addEventListener('change', ()=>{
    contaSelecionada = parseInt(conta.value);
});

function exibeContas(){
    contasClientes.forEach((cliente) => {    
        let elemento = document.createElement("option");    
        elemento.innerText = cliente.id;
        conta.appendChild(elemento);
    });
    contaSelecionada = parseInt(conta.value);
};

const operacao = document.getElementById("operacao");
let tipoOperacao = operacao.value;
operacao.addEventListener('change', ()=>{
    tipoOperacao = operacao.value;
});

const valor = document.getElementById("valor");
let valorOperacao = parseFloat(valor.value);
valor.addEventListener('change', ()=>{
    valorOperacao = parseFloat(valor.value);
});

let posCliente;

function buscaCliente(id){
    contasClientes.forEach((vl, i)=>{
        if(vl.id === id){
            posCliente = i;
        }
    });
}


function realizaSaque(valor, id){    
    buscaCliente(id);    
    if((valor === 0 || isNaN(valor))){
         alert("Valor Inválido");
    }else if(valor > contasClientes[posCliente].saldo){
         alert("Saldo Insuficiente.\nSaldo Atual R$ " + contasClientes[posCliente].saldo);
    }else{
        contasClientes[posCliente].saldo = contasClientes[posCliente].saldo - valor;
         alert("Saque realizado com sucesso!\nSaldo Atual R$ " + contasClientes[posCliente].saldo);    
    }
}

function realizaDeposito(valor, id){
    if((valor === 0 || isNaN(valor))){
        alert("Valor Inválido");
    }else{
        alert(valor);
    }
}

function verificaOperacao(valor, id, operacao){
    if(operacao === "saque"){       
        realizaSaque(valor, id);
    }else{
        realizaDeposito(valor, id);        
    }
}

const btnConfirmar = document.getElementById("confirmar");
btnConfirmar.addEventListener("click", ()=>{    
    verificaOperacao(valorOperacao, contaSelecionada, tipoOperacao);    
});





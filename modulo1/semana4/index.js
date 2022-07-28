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
const operacao = document.getElementById("operacao");
const valor = document.getElementById("valor");

function exibeContas(){
    let elemento; 
    contasClientes.forEach((cliente) => {    
        elemento = document.createElement("option");        
        elemento.innerText = cliente.id;
        conta.appendChild(elemento);
    });    
};

function realizaSaque(valor, i){    
    if(valor > contasClientes[i].saldo){
        alert("Saldo Insuficiente.\nSaldo Atual R$ " + contasClientes[i].saldo);         
    }else{
        contasClientes[i].saldo = contasClientes[i].saldo - valor;
        alert("Saque realizado com sucesso!\nSaldo Atual R$ " + contasClientes[i].saldo);    
    }
}

function realizaDeposito(valor, i){    
    contasClientes[i].saldo = contasClientes[i].saldo + valor;
    alert("Depósito realizado com sucesso!\nSaldo Atual R$ " + contasClientes[i].saldo);    
}

function verificaOperacao(valor, indiceCliente, operacao){   
    if(operacao === "saque"){      
        realizaSaque(valor, indiceCliente);
    }else if(operacao === "deposito"){
        realizaDeposito(valor, indiceCliente);        
    }
}

function consultaCliente(valor, id, op){
    let indiceCliente;
    contasClientes.forEach((vl, i)=>{
        if(vl.id === id){                 
            indiceCliente = i;            
        }
    });
    if(indiceCliente || indiceCliente === 0){
        if(valor > 0 && op){
            verificaOperacao(valor, indiceCliente, op);
        }else{
            alert("Valor incorreto ou operação inválida.");
        }
    }else{
        alert("Cliente não encontrado!")
    } 
}

const btnConfirmar = document.getElementById("confirmar");
btnConfirmar.addEventListener("click", ()=>{    
    consultaCliente(parseFloat(valor.value), parseInt(conta.value), operacao.value);    
});





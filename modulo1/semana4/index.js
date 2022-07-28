const contasClientes = [
    {
        id: 1,
        senha: "123",
        nome: "Anderson Aguiar",
        saldo: 500,
    },
    {
        id: 2,
        senha: "456",
        nome: "Patrícia Rocha",
        saldo: 3000,
    },
    {
        id: 3,
        senha: "789",
        nome: "Alisson Thiago",
        saldo: 5000,
    },    
];

const idConta = document.getElementById("conta");
const operacao = document.getElementById("operacao");
const valor = document.getElementById("valor");
const senha = document.getElementById("senha");

function exibeContas(){
    idConta.innerHTML = null;
    senha.value = null;
    valor.value = null;
    let elemento;    
    contasClientes.forEach((cliente) => {       
        elemento = document.createElement("option");        
        elemento.innerText = cliente.id;
        idConta.appendChild(elemento);
    });   
};

function realizaSaque(vlr, i){    
    if(valor > contasClientes[i].saldo){
        alert("Saldo Insuficiente.\nSaldo Atual R$ " + contasClientes[i].saldo);         
    }else{
        contasClientes[i].saldo = contasClientes[i].saldo - vlr;
        alert("Saque realizado com sucesso!\nSaldo Atual R$ " + contasClientes[i].saldo);
        exibeContas();   
    }    
}

function realizaDeposito(vlr, i){    
    contasClientes[i].saldo = contasClientes[i].saldo + vlr;
    alert("Depósito realizado com sucesso!\nSaldo Atual R$ " + contasClientes[i].saldo);  
    exibeContas();   
}

function verificaOperacao(valor, indiceCliente, operacao){   
    if(operacao === "saque"){      
        realizaSaque(valor, indiceCliente);
    }else if(operacao === "deposito"){
        realizaDeposito(valor, indiceCliente);        
    }
}

function verificaSenha(i, password){
    if(contasClientes[i].senha === password){
        return true;
    }else{
        alert("Senha inválida!");
        senha.value = null;
    }
}

function consultaCliente(valor, id, op, senha){
    let indiceCliente;
    contasClientes.forEach((vl, i)=>{
        if(vl.id === id){                 
            indiceCliente = i;            
        }
    });
    if(indiceCliente || indiceCliente === 0){
        if(verificaSenha(indiceCliente, senha)){
            if(valor > 0 && op){
                verificaOperacao(valor, indiceCliente, op);
            }else{
                alert("Valor incorreto ou operação inválida.");
            }
        }        
    }else{
        alert("Cliente não encontrado!")
    } 
}

const btnConfirmar = document.getElementById("confirmar");
btnConfirmar.addEventListener("click", ()=>{    
    consultaCliente(parseFloat(valor.value), parseInt(idConta.value), operacao.value, senha.value);    
});





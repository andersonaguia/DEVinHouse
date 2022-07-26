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

const clientes = document.getElementById("contas");

function exibeContas(){
    contasClientes.forEach((cliente) => {    
        let elemento = document.createElement("option");    
        elemento.innerText = cliente.nome;
        clientes.appendChild(elemento);
    });
}

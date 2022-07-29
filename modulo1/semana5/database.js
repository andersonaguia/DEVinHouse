class Produto{
    constructor(nm, vlr, estoque, qtd){
        this.nome = nm;
        this.preco = vlr;
        this.emEstoque = estoque;
        this.quantidade = qtd;
    }
}
class Pedido{
    constructor(numero, cliente){
        this.numPedido = numero;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = cliente;       
    }
}

export {Produto, Pedido};
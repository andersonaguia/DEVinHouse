export class Produto{
    constructor(nm, vlr, estoque, qtd){
        this.nome = nm;
        this.preco = vlr;
        this.emEstoque = estoque;
        this.quantidade = qtd;
    }
}

export class Pedido{
    constructor(num, cliente){
        this.numeroPedido = num;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = cliente;
    }
}
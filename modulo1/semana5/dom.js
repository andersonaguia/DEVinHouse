function elementProduto(produto) {
    const listItemEl = document.createElement("li");
  
    const productPrice = produto.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    listItemEl.innerText = `${produto.nome} - ${produto.quantidade} - ${productPrice}`; // prettier-ignore
    return listItemEl;
  }
  function printProds(list) {
    //
    const labelEl = document.createElement("label");
    labelEl.htmlFor = "produtos";
    labelEl.innerText = "produtos";
    // <label for="produtos">produtos</label>;
  
    const listEl = document.createElement("ul");
    listEl.name = "produtos";
    // <ul name="produtos" ></ul>
  
    list.forEach((prod) => {
      listEl.appendChild(elementProduto(prod));
      // <ul name="produtos">
      //   <li> ... dados do produto</li>
      // </ul>
    });
  
    return [labelEl, listEl];
  }
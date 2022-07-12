const titulo = document.getElementById("titulo");
const conteudo = document.getElementById("conteudo")
const alterar = document.getElementById("alterar");

alterar.addEventListener("click", function(){
    titulo.innerText = conteudo.value;
});
/*Event Listener Prevent Default*/
/*Previne que os dados sejam apagados quando enviamos o submit*/
const form = document.getElementById('form');
form.addEventListener('submit',  (event) =>{
  event.preventDefault();
  eventoClique();
});

function eventoClique(){
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;  
  const mensagem = document.getElementById('mensagem').value;  
  nome.value = "";
  email.value = "";
  mensagem.value = "";
  console.log("Formulário de contato.\nNome:" + nome + "\nE-mail: " + email + "\nDescrição: " + mensagem); 
  
  alert("Formulário enviado com sucesso!");
}
 
 


const idadeDigitada = document.getElementById("idade");
const btnClassificar = document.getElementById("classificar");

function classificaIdade(idade){
    if(idade > 15 && idade < 65){
        alert("Indivíduo Adulto.");
    }else if(idade <= 15){
        alert("Indivíduo Jovem.");
    }else{
        alert("Indivíduo Idoso.");
    }
    idadeDigitada.value = null;
}

btnClassificar.addEventListener('click', ()=> {
    if(idadeDigitada.value && idadeDigitada.value > 0){
        classificaIdade(parseInt(idadeDigitada.value));
    }else{
        alert("Digite um valor válido.");
    }    
});
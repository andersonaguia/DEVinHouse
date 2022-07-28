const numeroDigitado = document.getElementById("numero");
const btnVerificar = document.getElementById("verificar");

function parOuImpar(numero){
   
    if(numero %2 === 0){
        alert("O número digitado é par.");
    }else{
        alert("O número digitado é impar.");
    }
    numeroDigitado.value = null;
}
btnVerificar.addEventListener('click', ()=>{
    parOuImpar(parseInt(numeroDigitado.value));
})
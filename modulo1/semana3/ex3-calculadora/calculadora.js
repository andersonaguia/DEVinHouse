let primeiroNumero = parseFloat(prompt("Digite o primeiro número: "));
let segundoNumero = parseFloat(prompt("Digite o segundo número: "));
let operador = prompt("Digite a operação desejada (+, -, * ou /");


function calcula(numero1, numero2, operador){
    if(operador === "+"){
        console.log("Resultado: " + (numero1 + numero2));
    }else if(operador === "-"){
        console.log("Resultado: " + (numero1 - numero2));
    }else if(operador === "*"){
        console.log("Resultado: " + (numero1 * numero2));
    }else if(operador === "/"){
        console.log("Resultado: " + (numero1 / numero2));
    }    
} 

calcula(primeiroNumero, segundoNumero, operador);
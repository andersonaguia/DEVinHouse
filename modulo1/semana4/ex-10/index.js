const dataEscolhida = document.querySelector('#data');

const inicioVerao = "2022-22-12";
const fimVerao = new Date("2023-21-03");
datas = new Date();
dataEscolhida.addEventListener('change', ()=>{
    const data = Date.parse(dataEscolhida.value);
    dataDigitada = {
        dia: fimVerao.getMonth(),
    }   
    
    console.log(data);
    
})


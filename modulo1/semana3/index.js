let objeto1 = {
    nome: "Anderson",
    sobrenome: "Aguiar",
    setor: "camarote",
    idade: 21
}
let objeto2 = {
    nome: "André",
    sobrenome: "Mendes",
    setor: "arquibancada",
    idade: 18
}
let objeto3 = {
    nome: "Gilberto",
    sobrenome: "Junior",
    setor: "arquibancada",
    idade: 16
}
let objeto4 = {
    nome: "Andreza",
    sobrenome: "Sanny",
    setor: "pista",
    idade: 17
}
let objeto5 = {    
    nome: "Patrícia",
    sobrenome: "Rocha",
    setor: "camarote",
    idade: 25
}
let objeto6 = {
    nome: "José",
    sobrenome: "Augusto",
    setor: "pista",
    idade: 16   
}    

let listaDeConvidados = [
    objeto1, 
    objeto2, 
    objeto3, 
    objeto4, 
    objeto5, 
    objeto6
];

function liberaBebidas(array){    
    let novaLista = [];
    array.forEach((obj, i) => {
        novaLista.push(array[i]);
        if(array[i].idade > 17){            
            novaLista[i].openBar = true;
        }else{
            novaLista[i].openBar = false;
        }            
    });
    //console.table(novaLista);
    return novaLista;    
}

//console.log("LISTA ORIGINAL");
//console.table(listaDeConvidados);

//console.log("NOVA LISTA");
liberaBebidas(listaDeConvidados);



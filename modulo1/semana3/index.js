let listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ];

console.log(listaNumeros);

listaNumeros.forEach(function(valor,i){
    listaNumeros[i] = valor*2;
});

console.log(listaNumeros);
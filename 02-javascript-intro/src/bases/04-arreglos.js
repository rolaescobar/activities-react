//Arreglos en JS

//const arreglo = new Array(100); forma  estatica

const arreglo =[1,2,3,4];
//arreglo.push(1); no  se utilizar push porque modifica el objeto principal

let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map(function(numero){
   
    return numero*2;

});

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
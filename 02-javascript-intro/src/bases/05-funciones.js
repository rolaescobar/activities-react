//funciones  en JS
// no es recomendable hacer las funciones como la siguiente, es necesario hacerlas  constantes tipo flecha
/*const saludar = function (nombre){

    return `Hola,${nombre}`;
}*/

//el siguiente fragmento se comento para hacer pruebas con la tarea
/*
const  saludar2 =  (nombre) =>{

    return `Hola,${nombre}`;
}

const  saludar3 =  (nombre) => `Hola,${nombre}`;
const  saludar4 =  () => `Hola`;


console.log(saludar2('vegeta'))
console.log(saludar3('goku'))
console.log(saludar4('perro'))

    const getUser = () => 
    ({
    uid:'ABC123',
    username:'El_Papi1502'

    })

const user = getUser();
console.log(user);*/

//Tarea
//1. Transformar a una función  de Flecha
//2. Tiene que retornar un objeto implicito
//3.pruebas

/*function getUsuarioActivo(nombre){
    return {
        uid:'ABC5678',
        username:nombre
    }
};*/

//resultado del ejercicio
const getUsuarioActivo  = (nombre)=>
({uid:'ABC5678',
  username:nombre
})

console.log(getUsuarioActivo('Rolando Jose'));
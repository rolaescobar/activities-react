const  nombre = 'Rolando';
const  apellido = 'García';

//forma  anterior de uso de concatenación
//const nombreCompleto = nombre +  '' + apellido;

const nombreCompleto = `${nombre} ${apellido}${1+1}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola `+nombre;
}

console.log(`Este es un texto:${getSaludo(nombre)}`);
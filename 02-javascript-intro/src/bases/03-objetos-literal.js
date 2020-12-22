
const persona = {
   nombre: 'Tony',
   apellido: 'Stark',
   edad:45,
   direccion:{
       ciudad:'New York',
       zip: 57878743,
       lat:14.3232,
       lng:34.987878
   }
};

//console.table({persona});

//esta asignacion no hacerla, porque lo unico que se hace es la copia de la referencia y no una clonacion
//eso nos da un falso positivo, haciendo creer que todo esta correcto mas no es asi
//const persona2 = persona;

//lo correcto es crear un nuevo objeto
const persona2 = {...persona};

console.log(persona);
console.log(persona2);
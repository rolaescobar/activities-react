
import {getHeroeById} from './bases/08-imp-exp';
//tarea 
/*const promesa = new Promise((resolve,reject)=>{
     setTimeout(()=>{
 
         const p1 = getHeroeById(2);
         console.log(p1);
         //reject('No se pudo encontrar el Heroe');
         resolve(p1);
       //  console.log('2 segundos despues')
     },2000)
});

promesa.then((heroe)=>{

     console.log('Heroe',heroe);

})
.catch(err => console.log(err));*/

const  getHeroeByIdAsync = (id)=>{
return  new  Promise((resolve,reject)=>{
    setTimeout(()=>{
       const p1 = getHeroeById(id);        
        p1 == null?reject('No se pudo encontrar el Heroe'):resolve(p1);             
    },2000)

});
  
}

// de una forma:
/*getHeroeByIdAsync(22)
.then(heroe=>console.log('Heroe',heroe))
.catch(err => console.log(err))*/
//de otra formaa

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn)
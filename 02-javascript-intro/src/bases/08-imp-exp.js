
import heroes ,{owners}from '../data/heroes';

console.log(owners);

export const getHeroeById = (id)=>{

    return heroes.find( (heroe)  => heroe.id === id);
}
console.log(getHeroeById(3))


const getHeroesByOwner = (owner)=>heroes.filter((element)=>element.owner===owner);

console.log(getHeroesByOwner('Marvel'));

export default getHeroeById;
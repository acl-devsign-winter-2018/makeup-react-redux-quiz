import { PET_ADD } from './reducers';
import shortid from 'shortid';


export function addPet(pet) {
  pet.id = shortid();
  
  return {
    type: PET_ADD,
    payload: pet
  };
}
import { PET_ADD, } from './reducer';
import shortid from 'shortid';

export function addPet(Pet) {
  Pet.id = shortid();

  return {
    type: PET_ADD,
    payload: pet
  };
}

// export function removePet(id) {
//   return {
//     type: PET_REMOVE,
//     payload: id
//   };
// }
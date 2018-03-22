import { ADD_PET, REMOVE_PET } from './reducers';
import shortid from 'shortid';


export function addPet(pet) {
  pet.id = shortid();

  return {
    type: ADD_PET,
    payload: { pet }
  };
}

export function removePet(id) {

  return {
    type: REMOVE_PET,
    payload: id
  };
}
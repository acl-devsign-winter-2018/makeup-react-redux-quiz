import { PET_ADD, PET_DELETE } from './reducers';
import shortid from 'shortid';

export function addPet(pet){
  pet.id = shortid();
  return {
    type: PET_ADD,
    payload: pet
  };
}

export function removePet(id){

  return {
    type: PET_DELETE,
    payload: id
  };
}
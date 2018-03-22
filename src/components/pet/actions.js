import { PET_ADD, PET_REMOVE, PET_LOAD } from './reducers';
import shortid from 'shortid';

export function addPet(pet) {
  pet.id = shortid();

  return {
    type: PET_ADD,
    payload: pet
  };
}

export function removePet(id) {
  return {
    type: PET_REMOVE,
    payload: id
  };
}

export function loadPet(id) {
  return {
    type: PET_LOAD,
    payload: id
  };
}
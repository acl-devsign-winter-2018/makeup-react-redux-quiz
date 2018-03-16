import { CREATE_PET, DELETE_PET, UPDATE_PET } from './reducers';
import shortid from 'shortid';

export function addPet(pet) {
  pet.id = shortid();

  return {
    type: CREATE_PET,
    payload: pet
  };
}

export function deletePet(id) {
  return {
    type: DELETE_PET,
    payload: id
  };
}

export function updatePet(pet) {
  return {
    type: UPDATE_PET,
    payload: pet
  };
}
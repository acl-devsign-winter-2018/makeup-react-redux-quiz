import { PET_ADD, PET_DELETE } from './reducers';
// import shortid from 'shortid';
const Hashids = require('hashids');

export function addPet(pet){
  pet.id = new Hashids(); // error: Cannot create property 'id' on string. with both shortid and hashids
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
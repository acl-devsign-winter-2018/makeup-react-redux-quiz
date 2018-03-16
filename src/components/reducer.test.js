import { pets, CREATE_PET, DELETE_PET, UPDATE_PET } from './reducers';

it ('has a default empty array' , () => {
  const state = pets(undefined, {});
  expect(state).toEqual([]);
});

const addPet = {
  id: 123,
  text: 'New Pet'
};

it('add a pet', () => {
  const state = pets([], { type: CREATE_PET, payload: addPet });
  expect(state).toEqual([addPet]);
});

it('Deletes a pet', () => {
  const state = pets([addPet], { type: DELETE_PET, payload: 123 });
  expect(state).toEqual([]);
});

it('Updates a pet', () => {
  const updatePet = {
    id:123,
    text: 'My pet is updated'
  };

  const state = pets([addPet], { type: UPDATE_PET, payload: updatePet });
  expect(state).toEqual([{ ...addPet, ...updatePet }]);
});
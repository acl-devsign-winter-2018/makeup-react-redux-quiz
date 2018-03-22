import { pets, PET_ADD } from './reducer';

it('Has a default of empty array', () => {
  const state = pets(undefined, {});
  expect(state).toEqual([]);
});

const petToAdd = {
  id: 123,
  text: 'I am a Pet'
};

it('Add a note', () => {
  const state = pets([], { type: PET_ADD, payload: petToAdd });
  expect(state).toEqual([petToAdd]);
});
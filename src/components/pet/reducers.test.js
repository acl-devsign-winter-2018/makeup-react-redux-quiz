import { pets, PET_ADD, PET_REMOVE } from './reducers';

it('Has a default of empty array', () => {
  const state = pets(undefined, {});
  expect(state).toEqual([]);
});

const petToAdd = {
  id: 123,
  name: 'name',
  animal: 'animal',
  description: 'description'
};

it('Add pet', () => {
  const state = pets([], { type: PET_ADD, payload: petToAdd });
  expect(state).toEqual([petToAdd]);
});

it('Remove Pet', () => {
  const state = pets([petToAdd], { type: PET_REMOVE, payload: 123 });
  expect(state).toEqual([]);
});
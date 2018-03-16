import { ADD_PET, REMOVE_PET, pet } from './reducers';

const petToAdd = { id: 123, name: 'Jim', animal: 'dog', description: 'standup dog' };

it('adds a pet', () => {
  const state = pet([], { type: ADD_PET, payload: petToAdd });
  expect(state).toEqual([petToAdd]);
});

it('Remove a pet', () => {
  const state = pet([petToAdd], { type: REMOVE_PET, payload: 123 });
  expect(state).toEqual([]);
});
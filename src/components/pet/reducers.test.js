import { ADD_PET, REMOVE_PET, pet } from './reducers';

const petToAdd = { name: 'Jim', animal: 'dog', description: 'standup dog' };

it('adds a pet', () => {
  const state = pet([], { type: ADD_PET, payload: petToAdd });
  expect(state).toEqual([petToAdd]);
});
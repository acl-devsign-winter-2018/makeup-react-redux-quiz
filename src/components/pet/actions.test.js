import { addPet, removePet } from './actions';
import { ADD_PET, PET_REMOVE } from './reducers';

it('creates an add action', () => {
  const { type, payload } = addPet({ id: 123, name: 'Jim', animal: 'dog', description: 'standup dog' });
  expect(type).toBe(ADD_PET);
  const { id, name, animal } = payload;
  expect(animal).toBe('dog');
  expect(id).toBeTruthy();
  expect(name).toBe('Jim');
});

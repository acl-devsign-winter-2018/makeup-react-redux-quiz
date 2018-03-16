import { PET_ADD, PET_REMOVE } from './reducers';
import { addPet, removePet } from './actions';

it('Adds pet', () => {
  const { type, payload } = addPet({ name: 'name', animal: 'animal', description: 'description' });
  expect(type).toBe(PET_ADD);
  const { id, name, animal, description } = payload;
  expect(id).toBeTruthy();
  expect(name).toBe('name');
  expect(animal).toBe('animal');
  expect(description).toBe('description');
});

it('Remove pet', () => {
  const action = removePet(123);
  expect(action).toEqual({
    type: PET_REMOVE,
    payload: 123
  });
}); 
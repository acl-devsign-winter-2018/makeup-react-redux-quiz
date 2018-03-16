import { addPet, removePet } from './actions';
import { PET_ADD, PET_DELETE } from './reducers';

const sample = {
  name: 'Dingo',
  animal: 'dog',
  description: 'the nicest dog',
  id: 111
};

describe('Pet action tests:', () => {

  it('creates add action and takes correct values', () => {
    const { type, payload } = addPet(sample);
    expect(type).toBe(PET_ADD);
    const { name, id, animal, description } = payload;
    expect(name).toBe('Dingo');
    expect(animal).toBe('dog');
    expect(description).toBe('the nicest dog');
    expect(id).toBeTruthy();
  });

  it('creates a delete action', () => {
    const action = removePet(111);
    expect(action).toEqual({
      type: PET_DELETE,
      payload: 111
    });
  });
});
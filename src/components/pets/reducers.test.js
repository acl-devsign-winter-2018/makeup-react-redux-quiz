import { pets, PETS_LOAD, PET_ADD, PET_DELETE } from './reducers';

const sample = {
  name: 'Dingo',
  animal: 'dog',
  description: 'the nicest dog',
  id: 111
};

describe('Pets reducer tests:', () => {

  it('defaults pets to an empty array', () => {
    const state = pets(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads pets', () => {
    const state = pets([], { type: PETS_LOAD, payload: sample });
    expect(state).toEqual(sample);
  });

  it('adds a pet', () => {
    const state = pets(undefined, { type: PET_ADD, payload: sample });
    expect(state).toEqual([sample]);
  });

  it('deletes a pet', () => {
    const state = pets([sample], { type: PET_DELETE, payload: 111 });
    expect(state).toEqual([]);
  })
});
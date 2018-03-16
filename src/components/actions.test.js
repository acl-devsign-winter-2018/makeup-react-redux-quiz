import { addPet, deletePet, updatePet } from './actions';
import { CREATE_PET, DELETE_PET, UPDATE_PET } from './reducers';

it('creates an add pet', () => {
  const { type, payload } = addPet({ text: 'a pet' });
  expect(type).toBe(CREATE_PET);
  const { text, id } = payload;
  expect(text).toBe('a pet');
  expect(id).toBeTruthy();
});

it('removes a pet', () => {
  const action = deletePet(123);
  expect(action).toEqual({
    type: DELETE_PET,
    payload: 123
  });
});

it('updates a pet', () => {
  const action = updatePet({ id: 123, text: 'updated pet' });
  expect(action).toEqual({
    type: UPDATE_PET,
    payload: {
      id: 123,
      text: 'updated pet'
    }
  });
});
export const CREATE_PET = 'CREATE_PET';
export const DELETE_PET = 'DELETE_PET';
export const UPDATE_PET = 'ADD_PET';

export function pets(state = [], { type, payload }) {
  switch(type) {
    case CREATE_PET:
      return [
        ...state,
        payload
      ];

    case DELETE_PET:
      return state.filter(n => n.id !== payload);
    case UPDATE_PET: {
      const index = state.findIndex(n =>n.id === payload.id);
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}












export const ADD_PET = 'ADD_PET';
export const REMOVE_PET = 'REMOVE_PET';

export function pet(state = [], { type, payload }) {
  
  switch (type) {   

    case ADD_PET:
      return [
        ...state, 
        payload
      ];
    case REMOVE_PET:
      return state.filter(p => p.id === payload.id);
    default: 
      return state;
  }
}

// pets: [...state.pets, payload]

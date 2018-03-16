export const PET_ADD = 'PET_ADD';

export function pet(state = [], { type, payload }) {
  
  switch (type) {   

    case PET_ADD:
      return {
        ...state, 
        payload
      };     
    default: 
      return state;
  }

}

// pets: [...state.pets, payload]

export const PETS_LOAD = 'PET_LOAD';
export const PET_ADD = 'PET_ADD';
export const PET_DELETE = 'PET_DELETE';


export function pets(state = [], { type, payload }) {
  switch(type) {

    case PETS_LOAD:
      return payload;

    case PET_ADD:
      return [
        ...state,
        payload
      ];
      
    case PET_DELETE:
      return state.filter(p => p.id !== payload);

    default:
      return state;
  }
}
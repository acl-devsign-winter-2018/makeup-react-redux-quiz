export const PET_ADD = 'PET_ADD';
export const PET_REMOVE = 'PET_REMOVE';
export const PET_LOAD = 'PET_LOAD';

export function pets(state = [], { type, payload }) {
  switch(type) {
    case PET_ADD:
      return [
        ...state,
        payload
      ];
    
    case PET_REMOVE:
      return state.filter(gone => gone.id !== payload);

    default:
      return state;
  }
}

export function petLoad(state = [], { type, payload }) {
  switch(type) {
    case PET_LOAD:
      return [...state, payload];
    default:
      return state;
  }
}
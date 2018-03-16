export const PET_ADD = 'PET_ADD';

export function pets(state = [], { type, payload }) {
  switch(type) {
    case PET_ADD:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}
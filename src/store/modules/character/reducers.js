import * as types from './types';

const INITAL_STATE = {
  characters: {},
};

export const characterReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
};

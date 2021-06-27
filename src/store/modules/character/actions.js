import * as types from './types';
import api from '../../../services/api';

function setCharacters(data) {
  return {
    type: types.SET_CHARACTERS,
    payload: data,
  };
}

export const getCharacters = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get('/characters');
    dispatch(setCharacters(data));
  } catch (error) {
    dispatch({ type: 'SET_CHARACTERS_ERROR' });
  }
};

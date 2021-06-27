import * as types from './types';
import api from '../../../services/api';

function setCharacters(data) {
  return {
    type: types.SET_CHARACTERS,
    payload: data,
  };
}

export const getCharacters =
  (offset = 0) =>
  async (dispatch, getState) => {
    try {
      const { characters } = getState().characterReducer;

      const {
        data: { data },
      } = await api.get(`/characters?limit=20&offset=${offset}`);
      dispatch(
        setCharacters({
          ...data,
          results:
            offset > 1
              ? [...characters.results, ...data.results]
              : data.results,
        }),
      );
    } catch (error) {
      dispatch({ type: 'SET_CHARACTERS_ERROR' });
    }
  };

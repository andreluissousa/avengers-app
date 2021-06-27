import * as types from './types';
import api from '../../../services/api';

const setCharacters = (data) => ({
  type: types.SET_CHARACTERS,
  payload: data,
});

export const getCharactersList =
  (offset = 0) =>
  async (dispatch, getState) => {
    try {
      const { characters } = getState().characterState;

      const {
        data: { data },
      } = await api.get(`/characters?limit=20&offset=${offset}`);
      return dispatch(
        setCharacters({
          ...data,
          results:
            offset > 1
              ? [...characters.results, ...data.results]
              : data.results,
        }),
      );
    } catch (error) {
      console.log(JSON.stringify(error));
      return dispatch({ type: 'SET_CHARACTERS_GET_ERROR' });
    }
  };

export const editCharacterInfo = (newCharacter) => (dispatch, getState) => {
  try {
    const { characters } = getState().characterState;

    return dispatch(
      setCharacters({
        ...characters,
        results: characters.results.map((item) => {
          if (item.id === newCharacter.id) return { ...item, ...newCharacter };
          return item;
        }),
      }),
    );
  } catch (error) {
    console.log(JSON.stringify(error));
    return dispatch({ type: 'SET_CHARACTERS_EDIT_ERROR' });
  }
};

import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../store/modules/character';

const Character = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return (
    <View>
      <Text>Character</Text>
    </View>
  );
};

export default Character;

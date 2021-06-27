import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { getCharactersList } from '../../store/modules/character';
import { Gradient, Card } from '../../components';

const Character = ({ navigation }) => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characterState);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getCharactersList());
  }, [dispatch]);

  const onCardPressed = (item) => {
    navigation.navigate('CharacterInfo', { item });
  };

  const renderCard = ({ item }) => (
    <Card item={item} onCardPress={onCardPressed} />
  );

  return (
    <Gradient>
      <S.Container>
        <S.Flex flex={1}>
          {characters?.results && (
            <S.Flex flex={1}>
              <S.Search onChangeText={setFilter} />
            </S.Flex>
          )}
          <S.Flex flex={6}>
            <S.FlatList
              keyExtractor={(item) => item.name}
              data={characters?.results?.filter((item) =>
                item?.name?.toLowerCase().includes(filter.toLowerCase()),
              )}
              renderItem={renderCard}
              onEndReachedThreshold={0.5}
              onEndReached={() =>
                dispatch(getCharactersList(characters.results.length))
              }
            />
          </S.Flex>
        </S.Flex>
      </S.Container>
    </Gradient>
  );
};

export default Character;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { getCharacters } from '../../store/modules/character';
import { Gradient, Card, Search, Header, Modal } from '../../components';

const Character = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characterReducer);
  const [filter, setFilter] = useState('');
  const [modalState, setModalState] = useState({
    visible: false,
    item: null,
  });

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  function onCardPressed(item) {
    setModalState({ ...modalState, visible: true, item });
  }

  return (
    <Gradient>
      <S.Container>
        <Modal
          visible={modalState.visible}
          item={modalState.item}
          onRequestClose={() =>
            setModalState({ ...modalState, visible: false, item: null })
          }
        />
        <S.ContainerByFlex flex={1}>
          <S.ContainerByFlex flex={1}>
            <Header title="Marvel App" />
          </S.ContainerByFlex>
          <S.ContainerByFlex flex={1}>
            <Search onChangeText={setFilter} />
          </S.ContainerByFlex>
          <S.ContainerByFlex flex={6}>
            <S.FlatList
              keyExtractor={(item) => item.name}
              data={characters?.results?.filter((item) =>
                item?.name?.toLowerCase().includes(filter.toLowerCase()),
              )}
              renderItem={({ item }) => (
                <Card item={item} onCardPress={onCardPressed} />
              )}
              onEndReachedThreshold={0.1}
              onEndReached={() =>
                dispatch(getCharacters(characters.results.length))
              }
            />
          </S.ContainerByFlex>
        </S.ContainerByFlex>
      </S.Container>
    </Gradient>
  );
};

export default Character;

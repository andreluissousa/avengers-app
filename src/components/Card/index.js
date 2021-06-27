import React from 'react';

import * as S from './styles';

function Card({ item, onCardPress }) {
  return (
    <S.Container>
      <S.Touchable onPress={() => onCardPress(item)}>
        <S.Content flex={1}>
          <S.Image
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }}
          />
        </S.Content>
        <S.Content flex={2.5}>
          <S.Text size={15} fontBold>
            {item.name}
          </S.Text>
          <S.Text size={13}>{item.description}</S.Text>
        </S.Content>
      </S.Touchable>
    </S.Container>
  );
}

export default Card;

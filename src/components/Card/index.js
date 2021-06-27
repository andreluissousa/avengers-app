import React from 'react';

import * as S from './styles';

function Card({ item, onCardPress }) {
  return (
    <S.ContainerCard>
      {item && (
        <S.CardTouchable onPress={() => onCardPress(item)}>
          <S.CardContent flex={1}>
            <S.PreviewImage
              source={{
                uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
              }}
            />
          </S.CardContent>
          <S.CardContent flex={2.5}>
            <S.Text size={15} fontBold>
              {item?.name}
            </S.Text>
            <S.Text size={13}>{item?.description}</S.Text>
          </S.CardContent>
        </S.CardTouchable>
      )}
    </S.ContainerCard>
  );
}

export default Card;

import React from 'react';

import * as S from './styles';
import LinearBackground from '../Gradient';

function Modal({ item, visible, onRequestClose }) {
  return (
    <S.ModalContainer visible={visible} onRequestClose={onRequestClose}>
      {visible && item && (
        <LinearBackground>
          <S.Container>
            <S.ImagePreview
              source={{
                uri: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
              }}
            />
            <S.ContainerIcon onPress={onRequestClose}>
              <S.BackIcon />
            </S.ContainerIcon>
            <S.Content>
              <S.Title>{item?.name}</S.Title>
              <S.NoticeText>{item?.description}</S.NoticeText>
            </S.Content>
          </S.Container>
        </LinearBackground>
      )}
    </S.ModalContainer>
  );
}

export default Modal;

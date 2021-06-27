import React from 'react';
import * as S from './styles';
import { Gradient } from '../../components';

function Loading() {
  return (
    <Gradient>
      <S.Container>
        <S.ActivityIndicator />
      </S.Container>
    </Gradient>
  );
}
export default Loading;

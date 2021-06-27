import React from 'react';
import * as S from './styles';
import { Gradient } from '../../components';

function Loading() {
  return (
    <Gradient>
      <S.ContainerLoading>
        <S.ActivityIndicator />
      </S.ContainerLoading>
    </Gradient>
  );
}
export default Loading;

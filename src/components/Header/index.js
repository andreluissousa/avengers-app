import React from 'react';
import * as S from './styles';

function Header({ title }) {
  return (
    <S.ContainerHeader>
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.ContainerHeader>
  );
}

export default Header;

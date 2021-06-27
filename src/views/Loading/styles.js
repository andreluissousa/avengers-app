import styled from 'styled-components/native';

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 244px;
  height: 55px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: 'white',
})``;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const ContainerByFlex = styled.View`
  flex: ${({ flex }) => flex};
`;

export const FlatList = styled.FlatList.attrs({
  initialNumToRender: 10,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
})`
  flex: 1;
`;

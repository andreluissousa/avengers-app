import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const Flex = styled.View`
  flex: ${({ flex }) => flex};
`;

export const Search = styled.TextInput.attrs({
  placeholder: 'Econtre seu Herói Favorito...',
})`
  width: 92%;
  border-radius: 9px;
  border-width: 1px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  margin: 5px 0 0 16px;
  padding: 10px;
  color: #333333;
  font-size: 16px;
`;

export const FlatList = styled.FlatList.attrs({
  initialNumToRender: 20,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
})`
  flex: 1;
`;

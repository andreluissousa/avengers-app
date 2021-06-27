import styled from 'styled-components/native';

export const Container = styled.View`
  height: 120px;
  align-items: center;
  padding-bottom: 10px;
`;

export const Touchable = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  border-radius: 5px;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 100%;
  height: 95%;
  border-radius: 5px;
`;

export const Content = styled.View`
  flex: ${({ flex }) => flex};
  justify-content: flex-start;
  align-items: center;
  padding: 5px 5px 2px 7px;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 4,
})`
  width: 99%;
  font-size: ${({ size }) => size}px;
  color: #333333;
  padding: 4px 2px 2px 4px;
  font-weight: ${({ fontBold }) => (fontBold ? 'bold' : 'normal')};
`;

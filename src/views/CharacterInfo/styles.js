import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 50%;
  opacity: 0.6;
`;

export const Content = styled.View`
  bottom: 50px;
  height: 100%;
  padding: 20px;
  border-width: 2px;
  border-radius: 25px;
  border-color: #cc4224;
  background-color: white;
`;

export const Label = styled.Text`
  color: #f3d403;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  color: ${({ fontBold, editable }) =>
    fontBold && editable ? 'black' : fontBold ? 'black' : '#cc4224'};
  font-weight: ${({ fontBold }) => (fontBold ? 'bold' : 'normal')};
  border-radius: 10px;
  margin-top: 3px;
  background-color: ${({ editable }) =>
    editable ? 'rgba(0, 0, 0, 0.1)' : 'white'};
  padding: 10px;
  text-align: ${({ fontBold, editable }) =>
    fontBold && editable ? 'center' : fontBold ? 'center' : 'justify'};
`;
export const ContainerButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
`;

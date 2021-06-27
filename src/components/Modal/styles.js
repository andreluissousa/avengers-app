import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-translucent-modal';

export const ModalContainer = styled(Modal).attrs({
  animationType: 'fade',
})`
  flex: 1;
`;

export const Container = styled.View`
  height: 100%;
`;

export const ImagePreview = styled.Image`
  width: 100%;
  height: 30%;
  opacity: 0.6;
`;

export const Content = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  bottom: 50px;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #ff5a5f;
`;

export const LabelDate = styled(Title)`
  font-size: 13px;
  margin-top: 5px;
  color: #767676;
`;

export const NoticeText = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  color: #3b2678;
  text-align: justify;
`;

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  padding: 30px 0 0 5px;
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'keyboard-arrow-left',
  color: 'white',
  size: 50,
}))``;

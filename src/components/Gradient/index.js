import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

const Gradient = styled(LinearGradient).attrs({
  colors: ['#4D8AB5', '#F3D403', '#E8421E'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1.05 },
})`
  flex: 1;
`;

export default Gradient;

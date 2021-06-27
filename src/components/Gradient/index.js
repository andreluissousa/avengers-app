import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#CC4224', '#F3D403'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1.05 },
})`
  flex: 1;
`;

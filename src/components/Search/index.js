import styled from 'styled-components/native';

export default styled.TextInput.attrs({
  placeholder: 'Busque um Herói...',
})`
  width: 92%;
  border-radius: 9px;
  border-width: 1px;
  height: 50px;
  background-color: white;
  border-color: white;
  margin: 5px 0 0 16px;
  padding: 10px;
  color: #333333;
  font-size: 16px;
`;

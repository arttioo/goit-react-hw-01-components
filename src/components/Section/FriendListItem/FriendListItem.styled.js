import styled from 'styled-components';
export const List = styled.li`
  display: flex;
  margin-bottom: 20px;
`;
export const Status = styled.span.attrs(props => ({
  isOnline: props.isOnline || false,
}))`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

import styled from 'styled-components';
export const List = styled.li`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  border:1px solid lightgray;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
  
  width: 200px;
  padding: 10px 10px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 20px;
`;


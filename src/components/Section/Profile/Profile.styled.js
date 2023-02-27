import styled from 'styled-components';

export const SectionProfile = styled.div`
border: 1px solid green;
  border-radius: 5px;
  text-align: center;
  max-width: 300px;
  
`;

export const ProfileAvatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
export const Thumb = styled.div`
  border: 1px solid green;
  border-radius: 60px;
  width: 120px;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
`;
export const List = styled.li`
  display: flex;
  flex-direction: column;
`;
export const Stats = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
export const Quantity = styled.p`
  font-weight: 700;
`;

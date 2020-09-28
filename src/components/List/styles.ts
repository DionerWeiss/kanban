import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddButton = styled.button`
  /* flex: 1 0 auto; */
  /* width: 100%; */
  display: flex;
  padding: 3px;
  background: transparent;
  color: #5e6c84;
  border-radius: 5px;
  /* text-decoration: none; */
  outline: none;
  border-color: transparent;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

`;

export const AddButtonIcon = styled(FaPlus)`
  height: 15px;
  width: 15px;
  color: #5e6c84;
  margin-right: 3px;
`;

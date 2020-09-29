import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddNewCardButton = styled.button`
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

export const AddNewCardButtonIcon = styled(FaPlus)`
  height: 15px;
  width: 15px;
  color: #5e6c84;
  margin-right: 3px;
`;

export const FormNewCard = styled.div`
  display: none;
  flex-direction: column;

  textarea {
    padding: 5px;
  }

  &.visible {
    display: flex;
  }

`;

export const FormNewCardFooter = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  /* flex-direction: column; */



  button {
    background: #5aac44;
    padding: 5px;
    margin-right: 5px;
    color: #FFF;
    border: none;
    border-radius: 2px;
  }
`;

export const CloseIcon = styled(MdClose)`
  height: 20px;
  width: 20px;
  color: #5e6c84;

  &:hover {
    color: #172b4d;
  }
`;

import styled, { css } from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const visibleCSS = css`
  &.visible {
    display: flex;
  }
`;

export const AddNewCardButton = styled.button`
  /* flex: 1 0 auto; */
  /* width: 100%; */
  display: none;
  padding: 3px;
  background: transparent;
  color: var(--color-icons);
  border-radius: 5px;
  /* text-decoration: none; */
  outline: none;
  border-color: transparent;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  ${visibleCSS}

`;

export const AddNewCardButtonIcon = styled(FaPlus)`
  height: 15px;
  width: 15px;
  color: var(--color-icons);
  margin-right: 3px;
`;

export const FormNewCard = styled.div`
  display: none;
  flex-direction: column;

  textarea {
    padding: 5px;
  }

  ${visibleCSS}

`;

export const FormNewCardFooter = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;

  button {
    background: var(--color-button);
    padding: 5px;
    margin-right: 5px;
    color: var(--color-white);
    border: none;
    border-radius: 2px;
  }
`;

export const CloseIcon = styled(MdClose)`
  height: 20px;
  width: 20px;
  color: var(--color-icons);

  &:hover {
    color: var(--color-icons-hover);
  }
`;

import styled, { css } from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin: 8px;
  }
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
  justify-content: center;
  border: 1px solid;
  width: 100%;

/* {
    opacity: 0.7;
    cursor: pointer;
  } */

  &:focus,  &:hover  {
    background: var(--color-button-hover);
    opacity: 0.4;
    color: var(--color-white);
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

interface WrapperProps {
  isDraggingOver: Boolean
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 4px;
  width: 250px;
  min-height: 500px;
  background: ${props => (props.isDraggingOver ? 'var(--color-list-over)' : 'var(--color-list)')} ;
`;

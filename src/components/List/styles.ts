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
  display: none;
  padding: 3px;
  background: var(--color-white);
  color: var(--color-icons);
  border-radius: 5px;
  outline: none;
  border-color: var(--color-white);
  justify-content: center;
  border: 1px solid;
  width: 100%;

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
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 50px);
  margin: 8px;

  background: ${props => (props.isDraggingOver ? 'var(--color-list-over)' : 'var(--color-list)')} ;
`;

export const CardsContainer = styled.div`
  overflow-y: auto;
  max-height: 100%;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin: 0 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h3`
  margin-left: 5px;
  margin-bottom: 10px;
`;

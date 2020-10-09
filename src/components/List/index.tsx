import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  Droppable,
} from 'react-beautiful-dnd';

import {
  AddNewCardButton,
  AddNewCardButtonIcon,
  Container,
  CloseIcon,
  FormNewCard,
  FormNewCardFooter,
  Wrapper,
} from './styles';

import BoardContext from '../../pages/Board/context';

interface ListProps {
  columnId: string,
  name: string
}

const List: React.FC<ListProps> = ({
  children, columnId, name,
}) => {
  const [isFormCardVisible, setIsFormCardVisible] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');

  const { createNewCard } = useContext(BoardContext);

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isFormCardVisible]);

  function showNewCardForm() {
    setIsFormCardVisible(true);
  }

  function hideNewCardForm() {
    setIsFormCardVisible(false);
    setNewCardTitle('');
  }

  function handleBlur() {
    if (!newCardTitle) {
      hideNewCardForm();
    }
  }

  function handleAddNewCard() {
    createNewCard(columnId, newCardTitle);
    hideNewCardForm();
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCardTitle(event.target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      handleAddNewCard();
    }
  }

  return (
    <Container>
      <h2>{name}</h2>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <Wrapper
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {children}
              <FormNewCard className={isFormCardVisible ? 'visible' : ''}>
                <textarea
                  rows={3}
                  placeholder="Enter a title for this card..."
                  ref={ref}
                  value={newCardTitle}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  onBlur={handleBlur}
                />
                <FormNewCardFooter>
                  <button type="button" onClick={handleAddNewCard}>Add Card</button>
                  <CloseIcon onClick={hideNewCardForm} />
                </FormNewCardFooter>
              </FormNewCard>

              {provided.placeholder}
              <AddNewCardButton type="button" onClick={showNewCardForm} className={isFormCardVisible ? '' : 'visible'}>
                <AddNewCardButtonIcon />
                {' '}
                Add new card
              </AddNewCardButton>
            </Wrapper>
          );
        }}
      </Droppable>
    </Container>
  );
};

export default List;

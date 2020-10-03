import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  Droppable,
} from 'react-beautiful-dnd';
import {
  AddNewCardButton, AddNewCardButtonIcon, Container, CloseIcon, FormNewCard, FormNewCardFooter,
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
    setNewCardTitle('');
    setIsFormCardVisible(false);
  }

  function addNewCard() {
    createNewCard(columnId, newCardTitle);

    hideNewCardForm();
  }

  return (
    <Container>
      <h2>{name}</h2>
      <div style={{ margin: 8 }}>
        <Droppable droppableId={columnId} key={columnId}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? 'lightblue'
                    : 'lightgrey',
                  padding: 4,
                  width: 250,
                  minHeight: 500,
                }}
              >
                {children}
                <FormNewCard className={isFormCardVisible ? 'visible' : ''}>
                  <textarea
                    rows={3}
                    placeholder="Enter a title for this card..."
                    ref={ref}
                    value={newCardTitle}
                    onChange={event => setNewCardTitle(event.target.value)}
                  />
                  <FormNewCardFooter>
                    <button type="button" onClick={addNewCard}>Add Card</button>
                    <CloseIcon onClick={hideNewCardForm} />
                  </FormNewCardFooter>
                </FormNewCard>

                {provided.placeholder}
                <AddNewCardButton type="button" onClick={showNewCardForm} className={isFormCardVisible ? '' : 'visible'}>
                  <AddNewCardButtonIcon />
                  {' '}
                  Add new card
                </AddNewCardButton>
              </div>
            );
          }}
        </Droppable>

      </div>
    </Container>
  );
};

export default List;

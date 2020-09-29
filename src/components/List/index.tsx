import React, { useRef, useState } from 'react';
import {
  Droppable,
} from 'react-beautiful-dnd';
import {
  AddNewCardButton, AddNewCardButtonIcon, Container, CloseIcon, FormNewCard, FormNewCardFooter,
} from './styles';

// import { Container } from './styles';

interface ListProps {
  columnId: string,
  name: string
}

const List: React.FC<ListProps> = ({
  children, columnId, name,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLTextAreaElement>(null);

  function showNewCardForm() {
    setIsVisible(true);
    if (ref.current) {
      ref.current.focus();
    }
  }

  function hideNewCardForm() {
    setIsVisible(false);
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
                <FormNewCard className={isVisible ? 'visible' : ''} onBlur={hideNewCardForm}>
                  <textarea id="roww" rows={3} placeholder="Enter a title for this card..." ref={ref} />
                  <FormNewCardFooter>
                    <button type="button">Add Card</button>
                    <CloseIcon onClick={hideNewCardForm} />
                  </FormNewCardFooter>
                </FormNewCard>

                {provided.placeholder}
                <AddNewCardButton type="button" onClick={showNewCardForm}>
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

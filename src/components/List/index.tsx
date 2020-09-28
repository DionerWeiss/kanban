import React from 'react';
import {
  Droppable,
} from 'react-beautiful-dnd';

// import { Container } from './styles';

interface ListProps {
  columnId: string,
  name: string
}

const List: React.FC<ListProps> = ({
  children, columnId, name,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}

    >
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

                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
};

export default List;

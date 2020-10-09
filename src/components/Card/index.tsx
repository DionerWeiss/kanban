import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Wrapper } from './styles';

interface Props {
  id: string,
  index: number,
  content: string
}

const Card: React.FC<Props> = ({
  id, index, content,
}) => {
  return (
    <Draggable
      draggableId={id}
      index={index}
    >
      {(provided, snapshot) => {
        return (
          <Wrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
            isDragging={snapshot.isDragging}
          >
            {content}
          </Wrapper>
        );
      }}
    </Draggable>
  );
};

export default Card;

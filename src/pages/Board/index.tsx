import React, { useState } from 'react';
import {
  DragDropContext, DropResult,
} from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import Card from '../../components/Card';
import List from '../../components/List';

import { Container } from './styles';
import BoardContext from './context';

const itemsFromBackend = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
  { id: uuid(), content: 'Third task' },
  { id: uuid(), content: 'Fourth task' },
  { id: uuid(), content: 'Fifth task' },
];

const columnsFromBackend = {
  [uuid()]: {
    name: 'Requested',
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: 'To do',
    items: [],
  },
  [uuid()]: {
    name: 'In Progress',
    items: [],
  },
  [uuid()]: {
    name: 'Done',
    items: [],
  },
};

function Board() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const createNewCard = (listId: string, cardTitle: string) => {
    console.log(listId, cardTitle);
    const column = columns[listId];
    let { items } = column;
    items = [
      ...items, {
        id: uuid(),
        content: cardTitle,
      },
    ];

    setColumns({
      ...columns,
      [listId]: {
        ...column,
        items,
      },
    });
  };

  return (
    <BoardContext.Provider value={{ createNewCard }}>
      <Container>
        <DragDropContext
          onDragEnd={result => onDragEnd(result)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <List key={columnId} name={column.name} columnId={columnId}>

                {column.items.map((item, colIndex) => {
                  return (
                    <Card key={item.id} id={item.id} content={item.content} index={colIndex} />
                  );
                })}

              </List>
            );
          })}
        </DragDropContext>
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;

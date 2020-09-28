import React, { useState } from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { useDrop } from 'react-dnd';

import Card from '../Card';

import { Container } from './styles';

interface ListProps {
  id: number,
  title: string,
  cards: ItemProps[]
}

interface ItemProps {
  id: number,
  title: string
}

const List: React.FC<ListProps> = ({
  title, children, id, cards,
}) => {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
      </header>
      <Draggable draggableId={title} index={id}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            {cards.map(card => <Card {...provided.dragHandleProps} id={card.id} title={card.title} />)}
          </div>

        )}

      </Draggable>
    </Container>
  );
};

export default List;

// import React, { useState } from 'react';
// import { useDrop } from 'react-dnd';
// import update from 'immutability-helper';

// import Card from '../Card';

// const style = {
//   width: 400,
// };

// export interface ContainerState {
//   cards: any[]
// }

// const ITEMS = [
//   {
//     id: 1,
//     text: 'Write a cool JS library',
//   },
//   {
//     id: 2,
//     text: 'Make it generic enough',
//   },
//   {
//     id: 3,
//     text: 'Write README',
//   },
//   {
//     id: 4,
//     text: 'Create some examples',
//   },
//   {
//     id: 5,
//     text: 'Spam in Twitter and IRC to promote it',
//   },
//   {
//     id: 6,
//     text: '???',
//   },
//   {
//     id: 7,
//     text: 'PROFIT',
//   },
// ];

// interface ListProps {
//   id: number,
//   title: string
// }

// const List: React.FC<ListProps> = ({ id: listId, title }) => {
//   const [cards, setCards] = useState(ITEMS);
//   const moveCard = (id: string, atIndex: number) => {
//     const { card, index } = findCard(id);
//     setCards(
//       update(cards, {
//         $splice: [
//           [index, 1],
//           [atIndex, 0, card],
//         ],
//       }),
//     );
//   };

//   const findCard = (id: string) => {
//     const card = cards.filter((c) => `${c.id}` === id)[0];
//     return {
//       card,
//       index: cards.indexOf(card),
//     };
//   };

//   const [, drop] = useDrop({ accept: 'CARD' });
//   return (
//     <>
//       <div ref={drop} style={style}>
//         {cards.map((card) => (
//           <Card
//             listId={listId}
//             key={card.id}
//             id={`${card.id}`}
//             text={card.text}
//             moveCard={moveCard}
//             findCard={findCard}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default List;

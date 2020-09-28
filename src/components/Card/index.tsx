import React from 'react';
import { Container, Header, Title } from './styles';

interface Props {
  id: number,
  title: string,
  // moveCard: (id: number, to: number) => void,
  // findCard: (id: number) => { index: number }
}

interface Item {
  type: string
  id: number
  originalIndex: number
}

const Card: React.FC<Props> = ({
  id, title,
}) => {
  return (
    <Container>
      <Header>
        <p>{title}</p>
      </Header>
    </Container>
  );
};

export default Card;

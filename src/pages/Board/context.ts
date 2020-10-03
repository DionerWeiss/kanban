import { createContext } from 'react';

type contextProps = {
  createNewCard: (listId: string, cardTitle: string) => void
}

export default createContext<contextProps>({ createNewCard: () => { } });

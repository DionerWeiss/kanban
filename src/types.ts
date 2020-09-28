import { DraggableId, DraggableLocation } from 'react-beautiful-dnd';

export type Id = string;

export type AuthorColors = {
  soft: string,
  hard: string,
};

export type Author = {
  id: Id,
  name: string,
  avatarUrl: string,
  url: string,
  colors: AuthorColors,
};

export type Quote = {
  id: Id,
  content: string,
  author: Author,
};

export type Dragging = {
  id: DraggableId,
  location: DraggableLocation,
};

export type QuoteMap = {
  [key: string]: Quote[],
};

export type Task = {
  id: Id,
  content: string,
};

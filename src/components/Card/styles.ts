import styled from 'styled-components';

interface WrapperProps {
  isDragging: Boolean
}

export const Wrapper = styled.div<WrapperProps>`
  user-select: 'none';
  padding: 16px;
  margin: 0 5px 8px 5px;
  min-height: 50px;
  color: var(--color-white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${props => (props.isDragging ? 'var(--color-card-dragging)' : 'var(--color-card)')}
`;

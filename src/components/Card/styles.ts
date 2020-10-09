import styled from 'styled-components';

interface WrapperProps {
  isDragging: Boolean
}

export const Wrapper = styled.div<WrapperProps>`
  user-select: 'none';
  padding: 16px;
  margin: 0 0 8px 0;
  min-height: 50px;
  color: var(--color-white);
  background: ${props => (props.isDragging ? 'var(--color-card-dragging)' : 'var(--color-card)')}
`;

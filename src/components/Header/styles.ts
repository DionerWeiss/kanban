import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  /* padding: 0 30px; */
  background: var(--color-header);
  color: var(--color-white);
  display: flex;
  align-items: center;
  padding: 0 16px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

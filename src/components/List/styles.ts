import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  border-radius: 10px 10px 0px 0px;
  background: #8A8C8E;
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    margin-left: 10px;
  }

  ul {
    margin-top: 10px;
  }
`;

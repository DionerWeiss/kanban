import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-bottom: 30px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  /* border-top: 20px solid rgba(230, 236, 245, 0.4); */
`;

export const Header = styled.header`
  background: rgba(230, 236, 245, 0.4);

  p {
    padding: 5px;
  }
`;

export const Title = styled.h5`

`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: #0077b5;
`;

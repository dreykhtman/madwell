import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  grid-column-start: first;
  grid-column-end: last;

  text-align: center;
  color: #0802ff;
  padding: 2rem;
  font-size: 2.2rem;
`;

const Header = () => {
  return (
    <Container>
      <h1>Title of Page</h1>
    </Container>
  );
};

export default Header;

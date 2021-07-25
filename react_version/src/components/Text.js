import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  grid-column-start: first;
  grid-column-end: middle;

  display: flex;
  align-items: center;

  text-align: right;
  padding: 2rem;

  @media only screen and (max-width: 375px) {
    grid-column-start: first;
    grid-column-end: last;
  }
`;

const Text = () => {
  return (
    <Container>
      <p>
        I'm centered vertically on desktop, but flush with a right edge of some
        sort.
      </p>
    </Container>
  );
};

export default Text;

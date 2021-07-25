import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  text-align: center;
  color: #008001;
  width: 100vw;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Footer = () => {
  return (
    <Container>
      <p>And finally, I am some text centered along the bottom of the page.</p>
    </Container>
  );
};

export default Footer;

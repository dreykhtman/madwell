import React from 'react';
import styled from 'styled-components';

const Container = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  height: 150px;
  width: 150px;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
`;

const Figure = ({ image }) => {
  return (
    <Container>
      <Image src={image.path} alt={image.alt} />
      {image.caption && <Figcaption>{image.caption}</Figcaption>}
    </Container>
  );
};

export default Figure;

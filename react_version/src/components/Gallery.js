import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import Figure from './Figure';

const Container = styled.section`
  grid-column-start: middle;
  grid-column-end: last;

  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 1.4rem;
  justify-content: center;

  background-color: white;
  padding: 1.5rem 0 1.5rem 0;

  @media only screen and (max-width: 375px) {
    grid-column-start: first;
    grid-column-end: last;
    grid-template-columns: repeat(2, min-content);
  }
`;

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://www.madwell.com/interview/index.php?f=data'
        );

        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      {images && images.map((image) => <Figure key={uuidv4()} image={image} />)}
    </Container>
  );
};

export default Gallery;

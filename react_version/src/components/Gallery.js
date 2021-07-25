import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Figure from './Figure';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos?_limit=15'
          // 'https://www.madwell.com/interview/index.php?f=data'
        );

        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {images && images.map((image) => <Figure key={image.id} image={image} />)}
    </div>
  );
};

export default Gallery;

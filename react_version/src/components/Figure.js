import React from 'react';

const Figure = ({ image }) => {
  return (
    <figure>
      <img src={image.url} alt={image.alt} />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
};

export default Figure;

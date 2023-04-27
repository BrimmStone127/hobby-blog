
import React from 'react';
import { useSelector } from 'react-redux';

const ImageList = () => {
  // Use the useSelector hook to get the images from the store
  const images = useSelector(state => state.images);

  // Render the images
  return (
    <ul>
      {images.map(image => (
        <li key={image.url}>
          <img src={image.url} alt={image.title} />
          <p>{image.title}</p>
          <p>{image.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
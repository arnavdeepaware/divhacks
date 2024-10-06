// src/components/MyVideoComponent.tsx
import React from 'react';
import myGif from '../assets/images/abc.gif'; // Adjust the path based on your folder structure

const MyGifComponent: React.FC = () => {
  return (
    <div>
      <img src={myGif} alt="My GIF" width="600" /> {/* Set the desired width for the GIF */}
    </div>
  );
};

export default MyGifComponent;

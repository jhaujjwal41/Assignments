import React, { useState } from 'react';

const LikeButton = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    localStorage.setItem(movie.imdbID, JSON.stringify({...movie, isLiked: !isLiked}));
  };

  return (
    <button onClick={handleClick} className={`btn h-12 w-full ${isLiked ? 'btn-primary' : 'btn-accent'}`}>
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;

import React, {useState, useRef } from 'react';
import axios from 'axios';
import LikeButton from './LikeButton';
import { createBrowserRouter,BrowserRouter, Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

import MovieDeatils from './pages/MovieDetail';
import NavigationMenu from './pages/Navigation';


function App() {
  const [movies, setMovies] = useState([]);
  const [showLikedOnly, setShowLikedOnly] = useState(false);
  const searchRef = useRef();
  

  // const searchMovies = async () => {
  //   const moviesRequest = await axios.get(
  //     `http://www.omdbapi.com/?s=${searchRef.current.value}&apikey=938870dd`
  //   );
  //   setMovies(moviesRequest.data.Search);
  // };

  const toggleLikedOnly = () => {
    setShowLikedOnly(!showLikedOnly);
  };

  return (
    <div className="App flex justify-center flex-col ">
     <NavigationMenu setMovies={setMovies} />
      <button onClick={toggleLikedOnly}>
        {showLikedOnly ? 'Show All' : 'Show Liked Only'}
      </button>
      {movies.length > 0 ? (
        <div className="flex justify-center gap-4 flex-wrap -mx-4">
          {movies
            .filter(
              movie =>
                !showLikedOnly ||
                JSON.parse(localStorage.getItem(movie.imdbID))?.isLiked)
                .map(movie => (
               <div className="  px-4  py-4" key={movie.imdbID}>
                 <div className="card w-64 bg-base-100 shadow-3xl">
                   <figure   className='h-96'>
                  
                    <img src={movie.Poster==='N/A'?'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg':movie.Poster} className="w-full object-cover rounded-2xl h-full" alt={movie.Type} 
                    />
                    
                   </figure>
                   <div className="flex flex-col gap-2 px-2">
                    <h2 className="pt-4 font-semibold text-xl h-20 overflow-hidden">{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <LikeButton movie={movie}/>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
        <p>No movies found</p>
        )}
        </div>
      );
    }

export default App;


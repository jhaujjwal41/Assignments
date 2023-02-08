import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import LikeButton from './LikeButton';

function App() {
  const [movies, setMovies] = useState([]);
  const searchRef = useRef();

  // const getMovies = async () =>{
  //   const movieRequest = await axios.get(" http://www.omdbapi.com/?s=harry&apikey=938870dd");
  //   console.log(movieRequest.data);
  //   setMovies(movieRequest.data.Search);
  // }

  const searchMovies = async()=>{
    const moviesRequest = await axios.get(`http://www.omdbapi.com/?s=${searchRef.current.value}&apikey=938870dd`);
    
    setMovies(moviesRequest.data.Search);
  }

console.log(movies); 


  return (
    <div className="App flex flex-col ">
      <input type="text" ref={searchRef}></input>
      <button onClick={searchMovies}>Search</button>
       {movies.length > 0 ? movies.map(movie =>{
        return (
           
           <div className='flex flex-basis-1/4 flex-row'> 
           <div className=" card w-96 bg-base-100 shadow-xl">
           <figure><img src={movie.Poster} alt={movie.Type} /></figure>
            <div className="card-body">
            <h2 className="card-title">{movie.Title}</h2>
              <p>{movie.Year}</p>
              <LikeButton  movie={movie}/>
          </div>
        </div>
      </div>
          
        )
       })
        : <p><strong>No Movies Found</strong></p>}
    </div>
  );
}

export default App;

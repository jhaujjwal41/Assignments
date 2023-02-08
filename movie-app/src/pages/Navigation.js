
import { Link } from "react-router-dom";
import React, {useState, useRef } from 'react';
import axios from 'axios';



function NavigationMenu({setMovies}){
  
    const searchRef = useRef();
    const searchMovies = async () => {
    const moviesRequest = await axios.get(
      `http://www.omdbapi.com/?s=${searchRef.current.value}&apikey=938870dd`
    );
    setMovies(moviesRequest.data.Search);
  };
    return(
        <>
     <div className=' flex justify-center'>
     <input type="text" className='mb-2 text-center text-sm w-[170px] rounded-3xl h-[34px] bg-white font-medium text-gray-900' ref={searchRef} placeholder="Type Here" />
     </div>
      <button onClick={searchMovies}>Search</button>
        </>
    )
}

export default NavigationMenu;
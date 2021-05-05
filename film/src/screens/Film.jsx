import React from 'react'
import { useState, useEffect } from 'react';
import { getAllFilms } from '../services/films'
import FilmShow from '../components/FilmShow'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Film = () => {
  const [film, setFilm] = useState([]);
  
  useEffect(()=>{
    const fetchFilms=async()=>{
      const films = await getAllFilms();
      setFilm(films);
      
    };
    fetchFilms();
 },[])
  return (
    <div>
      <div>
        <h1>Select Your Movie Below</h1>
        {film.map((film) => (
          <FilmShow
          img={film.img}/>
        ))}
        </div>
      
      
    </div>
  )
}

export default Film

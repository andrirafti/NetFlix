import React from 'react'
import { useState, useEffect } from 'react';
import { getAllFilms } from '../services/films'
import FilmShow from '../components/FilmShow'
import {useAuth0} from "@auth0/auth0-react"
//youtube and movietrailer go together for youtube clips//
import YouTube from "react-youtube"
import './Film.css'
import movieTrailer from 'movie-trailer'

const Film = () => {
  const [film, setFilm] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("")
  const {isAuthenticated} =useAuth0()
  
  useEffect(()=>{
    const fetchFilms=async()=>{
      const films = await getAllFilms();
      setFilm(films);
      
    };
    fetchFilms();
  },[])



  //for youtube//
 const opts={
   height:"390",
   width:"100%",
   playerVars:{
     autoplay:1
   },
 };
//for youtube videos//
  const handleClick=(movie)=>{
    //keeps video closed if its playing which automatically it will//
    if (trailerUrl){
      setTrailerUrl('');
    } else{
      //movieTrailer is built into the react-youtube//
      movieTrailer(movie?.name || "").then((url)=>{
      const urlParams= new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get('v'))

      }).catch(error=>console.log(error))
    }
  }

  return (
    isAuthenticated&&(
      <div className='posters'>
        <h1 className='category'>Action/Adventure</h1>
      <div className="poster">
        {film.map((val) => (
          <FilmShow className="img"
            img={val.img}
            name={val.name}
            />
           
        ))}
          </div>
        {trailerUrl&&  <YouTube videoId={trailerUrl} opts={opts}/>}
          </div>
      
      

  ))
}

export default Film

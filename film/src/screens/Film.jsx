import React from 'react'
import { useState, useEffect } from 'react';
import { getAllFilms } from '../services/films'
import { useAuth0 } from "@auth0/auth0-react"
import Aos from "aos"
import "aos/dist/aos.css";
import Banner from './Banner'
//youtube and movietrailer go together for youtube clips//
import YouTube from "react-youtube"
import './Film.css'
import movieTrailer from 'movie-trailer'

const Film = () => {
  const [film, setFilm] = useState([]);
  const [search, setSearch] = useState('');
  const [trailerUrl,setTrailerUrl]=useState("")
  const {isAuthenticated} =useAuth0()
  //get all films//
  useEffect(()=>{
    const fetchFilms=async()=>{
      const films = await getAllFilms();
      setFilm(films);
      
    };
    fetchFilms();
  }, [])
 //filter for category or names//
  const filterCategory = film.filter((val) => {
    
    
      return val.name.toLowerCase().includes(search.toLowerCase()) || val.category.toLowerCase().includes(search.toLowerCase())
    
  })
// Aos is the below//
  useEffect(()=>{
    Aos.init({duration:1000});
//can use fadeleft, fade right,etc..
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
    } else {
      window.scrollTo(0,document.body.scrollHeight)
      //movieTrailer is built into the react-youtube//
      movieTrailer(movie?.name || "").then((url)=>{
      const urlParams= new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get('v'))

      }).catch(error=>console.log(error))
    }
  }

  return (
    isAuthenticated&&(
      <div   className='posters'>
       <Banner/>
        <h1 className='category'> Netflix Originals</h1>
        <input className="searching" placeholder="Search: Name/Category 🔍" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div data-aos="fade-down" className="poster">
          {filterCategory.map((val) => (
            
          // <FilmShow className="img"
          //   img={val.img}
          //   name={val.name}
          //   />
            //pretty much doing the below made FilmShow.jsx useless tbh.. //
            <div className="container">
            <img className="img"
              src={val.img}
              onClick={() => handleClick(val)}
                alt={val.name}
              />
             {val.name.length>=12? `${val.name.substring(0,9)}...`:val.name}
            </div>
        ))}
          </div>
        {trailerUrl&&  <YouTube videoId={trailerUrl} opts={opts}/>}
          </div>
      
      

  ))
}

export default Film

import React from 'react'
import { useState, useEffect } from 'react';
import { getAllFilms } from '../services/films'
import { useAuth0 } from "@auth0/auth0-react"
import Loading from './Loading'
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
  const [isLoaded, setIsLoaded] = useState(false);
  const {isAuthenticated} =useAuth0()
  //get all films//
  useEffect(()=>{
    const fetchFilms=async()=>{
      const films = await getAllFilms();
      setFilm(films);
      setIsLoaded(true)
      
    };
    fetchFilms();
  }, [])
  //sort release date//
  const sortYearLowHigh=film.map(val=>val).sort((a,b)=>a.release-b.release)
  const sortYearHighLow = film.map(val => val).sort((a, b) => b.release - a.release)

  //sort alphabetically by letters name (a-z)//
  const sortAlphabet = film.map(val => val).sort((a, b) => a.name.localeCompare(b.name))
  const sortAlphabetBackwards = film.map(val => val).sort((a, b) => b.name.localeCompare(a.name))

 

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


  if (!isLoaded){
    return <Loading/>
  }
  return (
    isAuthenticated&&(
      <div   className='posters'>
       <Banner/>
        <h1 className='category'> Netflix Originals</h1>
        <input className="searching" placeholder="Search: Name/Category ????" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          {/* <button className="sort" onClick={(e) => e.preventDefault(setFilm(sortYearLowHigh))}>Sort:Old</button>
        <button className="sort" onClick={(e) => e.preventDefault(setFilm(sortYearHighLow))} >Sort:New</button> */}
       
        <select  className="sort" multiple  >
          <option disabled >Sort By:</option>
          <option onClick={(e) => e.preventDefault(setFilm(sortYearHighLow))}> Sort: New</option>
          <option onClick={(e) => e.preventDefault(setFilm(sortYearLowHigh))}>Sort: Old</option>
          <option onClick={(e) => e.preventDefault(setFilm(sortAlphabetBackwards))}>Sort Alphabetically:Z-A</option>
          <option onClick={(e)=>e.preventDefault(setFilm(sortAlphabet))}>Sort Alphabetically:A-Z</option>
          </select>
          
   
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

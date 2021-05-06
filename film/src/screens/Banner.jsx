import React, {useState,useEffect} from 'react'
import { getAllFilms } from '../services/films'
import './Banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await getAllFilms();
      //Below i will attack one random thing inside the array using math.floor/math.random.
      setMovie(request[Math.floor(Math.random() * request.length )])
      return request
    };
    fetchData()
  }, [])
  console.log(movie)
  return (
    <header className="banner"
    style={{backgroundImage: `url(${movie.img_cover})`}}
    
    >
    
        <div className="banner_buttons">
        
          <button className="banner_button">▶️ Play </button>
          <button className="banner_button2"> ⏯ More Info </button>   
        </div>
      <div className="banner--fadeBottom"/>
      </header>
  )
}

export default Banner

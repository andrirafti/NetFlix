import React, {useState,useEffect} from 'react'
import FilmShow from '../components/FilmShow';
import { getAllFilms } from '../services/films'
import './Banner.css'
import YouTube from "react-youtube"
import './Film.css'
import movieTrailer from 'movie-trailer'


const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  
  //Use effect for random pics//
  useEffect(() => {
    const fetchData = async () => {
      const request = await getAllFilms();
      //Below i will attack one random thing inside the array using math.floor/math.random.
      setMovie(request[Math.floor(Math.random() * request.length )])
      return request
    };
    fetchData()
  }, [])


  
  //Youtube Stuff Below//
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1
    },
  };
  //Youtube onclick event for the Play Button//
  const handleClick=(val)=>{
    //keeps video closed if its playing which automatically it will//
    if (trailerUrl){
      setTrailerUrl('');
    } else {
      window.scrollTo(0,document.body.scrollHeight)
      //movieTrailer is built into the react-youtube//
      //val is the paramter everything else just copy and paste inside// 
      movieTrailer(val?.name || "").then((url)=>{
        const urlParams= new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'))
        
      }).catch(error=>console.log(error))
    }
  }
 //handleclick takcles the RANDOM movie showing on the header, so just leave it as movie and it will play it.
  //The reason we dont need to do movie.name is because handleClick has val.name built into the else feature!//
  return (
    <div>
      <header className="banner"
      style={{backgroundImage: `url(${movie.img_cover})`}}
      >

        <div className="banner_buttons">
          <button  onClick={() => handleClick(movie)} className="banner_button">▶️ Play </button>
          <button className="banner_button2"> ⏯ More Info </button>
              
              
          
        </div>
      </header>
     <div className="banner--fadeBottom">
      </div>
      {trailerUrl&&  <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
  )
}

export default Banner

import React, { useState, useEffect } from 'react';
import { getOneFilm } from '../services/films'
import { useParams, useHistory } from 'react-router-dom';
import './FilmDetail.css'

const FilmDetail = () => {
  const [film, setFilm] = useState([])
  const params = useParams();
  const history=useHistory()

  useEffect(()=>{
    const fetchFilm=async()=>{
      const thefilm=await getOneFilm(params.id);
      setFilm(thefilm);
    };
    fetchFilm();
  },[params.id])

  
  return (
    <div>
        <button  className="Button" onClick={()=>history.push("/Movies")} > X  </button>
      <header>
        <h1 className="film" >
           {film.name}
        </h1>
        <img className="img" src={film.img} />
        <p className="film">{film.category}</p>
        <p className="film">{film.release}</p>
        </header>

    </div>
  )
}

export default FilmDetail

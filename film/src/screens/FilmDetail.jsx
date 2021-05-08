import React, { useState, useEffect } from 'react';
import { getOneFilm } from '../services/films'
import {useParams,useHistory} from 'react-router-dom';
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
      <header>
        <h1>
          {film.name}
        </h1>
        <img src={film.img} />
        <p>{film.category}</p>
        <p>{film.release}</p>
        <button onClick={()=>history.push("/Movies")} >🔙</button>
        </header>

    </div>
  )
}

export default FilmDetail

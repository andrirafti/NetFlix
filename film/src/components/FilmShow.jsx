import React from 'react';
import './FilmShow.css'
export default function FilmShow(props) {
  const { name, category, release,img,trailer } = props;
  
  



  return (
    
    <div className="container">
     
      <img src={img} />
      <div>
        <p className="name">{name.length>=12? `${name.substring(0,9)}...`:name}</p>
        </div>
        <p className="name">{category}</p>
        <p className="name">{release}</p>
        <p>{trailer}</p>
     
        
      </div>
     
     
      
     
   
  )
}

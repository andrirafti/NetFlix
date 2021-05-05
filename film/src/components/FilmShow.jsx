import React from 'react';

export default function FilmShow(props) {
  const { name, category, release,img,trailer } = props;
  
  



  return (
    
    <div className="container">
      <div className="box">
      <img src={img}/>
        <h3  className="name">{name}</h3>
        <p className="name">{category}</p>
        <p className="name">{release}</p>
        <p>{trailer}</p>
     
        
      </div>
     
     
      
      </div>
   
  )
}

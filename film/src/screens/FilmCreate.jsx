import {postFilm} from '../services/films'
import {useState,useEffect} from 'react'
import {useHistory,} from 'react-router-dom'
import Aos from "aos"
import "aos/dist/aos.css";
import Tilt from 'react-vanilla-tilt'
import './FilmCreate.css'


const FilmCreate=()=>{
  const[isCreated,setCreated]=useState(false);
  
  const history=useHistory();
  //For AOS//
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  
  //the below is an easier way to do const [name,setName] const [img,setImg] make all useState into one big one
  const [film,setFilm]=useState({
    name:"",
    category:"",
    img:"",
    release:"",
    img_cover:""

  })
  
  //handleChange for the above// its the shorter way of doing const [name,setName]=useState([]) do all at once instead of indivually 
  
  const handleChange=(e)=>{
    //name,value as special values used in our form so that what we will target.
    const {name,value}=e.target;
    setFilm({
      ...film,
     
      [name]:value
    })
  }
  // Now we need our handleSubmit which brings in the axios call to submit everyting properly from the handleChange input fields//
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const filmadded = await postFilm(film);
      setCreated(filmadded);
    };
    if (isCreated){
      history.push(`/Movies`)
    }
  return (
    <div className="input" data-aos="fade-up">
      <Tilt >
      <form onSubmit={handleSubmit}>
        <h1>Create A Movie!</h1>
        
        <div className="all" >
        <label> Title:
        <input type="text"  placeholder="Exact Movie Title" name="name" value={film.name} required onChange={handleChange} /></label>
        </div>
        <div className="all" >
          <label> Category:</label>
            <select onChange={handleChange}  name="category" value={film.category} >
              <option disabled>Select A Category </option>
            <option value="Horror">Horror</option>
            <option  value="Action/Adventure">Action/Adventure</option>
            <option  value="Comedy">Comedy</option>
            <option  value="Mystery">Mystery</option>
            </select>
        </div>
        <div className="all">
          <label> Release Year:
          <input placeholder="Year Released" type="number" name="release" value={film.release} required onChange={handleChange} /> </label>
        </div>
        <div className="all">
          <label> Image URL:
          <input placeholder="Image JPG Link"type="text" name="img" value={film.img} required onChange={handleChange} /> </label>
        </div>
        <div className="all">
          <label> Img Wallpaper:
          <input placeholder="Image WallPaper Link" type="text" name="img_cover" value={film.img_cover} required onChange={handleChange} /> </label>
        </div>
        
        <button  className="banner_button3"type="submit">Submit Film</button>
        </form>

      
</Tilt>



    </div>
  );


}
export default FilmCreate
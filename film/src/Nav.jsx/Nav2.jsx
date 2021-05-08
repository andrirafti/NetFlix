import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../SignIn/Profile'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./Nav.css"
import LoginButton from '../SignIn/LoginButton'
import LogOut from '../SignIn/LogOut'
import '../SignIn/Log.css'


import {useAuth0} from "@auth0/auth0-react"


const Nav2 = () => {
  const {isAuthenticated} =useAuth0()
  //if the user is authetnciated then it can see the other parts of NAV
  return (
    isAuthenticated&&(
    <div className="nav">
        <Profile />
        <div>
      <Link className="netflix" to='/'> NETFLIX</Link>
      <Link className='movies'to='/Movies'> Movies</Link>
          <Link className="movies" to='/Create'>Create </Link>
          </div>

       
        <LoginButton/>
        <LogOut />
        
        
    </div>
 
    ))
    
}

export default Nav2

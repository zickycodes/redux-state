import React  from "react";
import { Link } from "react-router-dom";
import {LoginButton, LogoutButton} from "../authentication/buttons";
import { useSelector } from "react-redux";

const Header = () => {
  const userLoggedin = useSelector((state) => {
     return state.loginDetails.login
  })

  const userLoggedOut = useSelector((state) => {
    return state.loginDetails.logout
  })
 
  const helpMeRender = () => {
    // return userLoggedin && !userLoggedOut ? <LogoutButton/>: <LoginButton/>
    if(userLoggedin === true && userLoggedOut === false) {
      console.log('Yay')
       return <LogoutButton/>
    } 
     if(userLoggedin === false && userLoggedOut === true) {
       console.log('Hell no!')
        return <LoginButton/>
     }
  }

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className ="item">Streamer</Link>
      <div className="right menu">
        <Link to="/" className="item">All Streams</Link>
        <div>{helpMeRender()}</div>
      </div>
    </div>
  )
}
 


export default Header

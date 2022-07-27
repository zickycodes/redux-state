import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "../authentication/auth0";

import { LoginButton, LogoutButton } from "../authentication/buttons";

// import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  function changeAuth() {
    dispatch(authenticate(isAuthenticated));
  }
  useEffect(() => {
    changeAuth();
    //eslint-disable-next-line
  }, [isAuthenticated]);

  // const userLoggedin = useSelector((state) => {
  //    return state.loginDetails.login
  // })

  // const userLoggedOut = useSelector((state) => {
  //   return state.loginDetails.logout
  // })

  // const helpMeRender = () => {
  //   // return userLoggedin && !userLoggedOut ? <LogoutButton/>: <LoginButton/>
  //   if(userLoggedin === true && userLoggedOut === false) {
  //     console.log('Yay')
  //      return <LogoutButton/>
  //   }
  //    if(userLoggedin === false && userLoggedOut === true) {
  //      console.log('Hell no!')
  //       return <LoginButton/>
  //    }
  // }

  return (
    <>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamer
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
        </div>
      </div>
    </>
  );
};

export default Header;

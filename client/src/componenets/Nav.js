import navData from "./nav-data";
import { ReactComponent as Hamburger } from '../images/hamburger.svg';
import './Nav.css'
import {NavLink} from 'react-router-dom';
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";

import { history } from "../helpers/history";

function Navbar() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggle = () => {

    const navList = document.querySelector('.navbar-list');

    if (navList.style.display === '') {
      navList.style.display = 'block';
    }
    else if (navList.style.display === 'block') {
      navList.style.display = '';
    }

  }

  const hideNavList = () => {
    if (window.innerWidth<=576) {
      document.querySelector('.navbar-list').style.display = '';
    }
  }

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);


  const logOut = () => {
    hideNavList();
    dispatch(logout());
  };

  return (
    <nav className='nav-bar'>
      <article className='exodus-logo-navbar'>
        @exodus <br /> 
      </article>
      <Hamburger onClick={toggle} className='hamburger' />
      <ul className='navbar-list'>
        {/* {
          navData.map((tabs) => {
            var lin = "/" 
            if (tabs != "home") {
              lin += tabs
            }
            return (
              <li className='navbar-list-item' onClick={hideNavList}>
                <NavLink to={lin}>
                  {tabs}
                </NavLink>
              </li>
            );
          })
          
        } */}
        <li className='navbar-list-item' onClick={hideNavList}>
            <NavLink to="/">Home</NavLink>
          </li>
           <li className='navbar-list-item' onClick={hideNavList}>
           <NavLink to="/about">About</NavLink>
         </li>
         {/* {currentUser ? (
           <>
           <li className='navbar-list-item' onClick={hideNavList}>
          <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className='navbar-list-item' onClick={logOut}>
          <NavLink to="/login">Logout</NavLink>
          </li>
           </>
         ):(
           <></>
          <li className='navbar-list-item' onClick={hideNavList}>
          <NavLink to="/login">Login</NavLink>
          </li>
         )} */}
        
          <li className='navbar-list-item' onClick={hideNavList}>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

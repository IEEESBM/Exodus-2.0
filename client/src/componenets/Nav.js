import navData from "./nav-data";
import { ReactComponent as Hamburger } from '../images/hamburger.svg';
import './Nav.css'
import {NavLink} from 'react-router-dom';
import React from "react";
function Navbar() {

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

  return (
    <nav className='nav-bar'>
      <article className='exodus-logo-navbar'>
        exodus <br /> &lt;/&gt;
      </article>
      <Hamburger onClick={toggle} className='hamburger' />
      <ul className='navbar-list'>
        {
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
        }
      </ul>
    </nav>
  );
}

export default Navbar;

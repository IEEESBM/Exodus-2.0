import navData from "./nav-data";
import { ReactComponent as Hamburger } from '../images/hamburger.svg';
import './Nav.css'
import {NavLink} from 'react-router-dom';
function Navbar() {

  const toggle = () => {

    const hamburger = document.querySelector('.navbar-list');

    if (hamburger.style.display === '') {
      hamburger.style.display = 'block';
    }
    else if (hamburger.style.display === 'block') {
      hamburger.style.display = '';
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
              <li className='navbar-list-item'>
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

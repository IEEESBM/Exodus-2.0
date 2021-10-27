import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink to="/"><i className="fas fa-home nav-icons"></i></NavLink>
                    <NavLink to="/"><i class="fas fa-meteor nav-icons"></i></NavLink>
                    <NavLink to="/"><i class="fas fa-user-astronaut nav-icons"></i></NavLink>
                </li>
                
            </ul>
            <ul className="nav-item">
                <a href="#" className="dashboard-btn">Refill</a>
                <i class="fas fa-wallet nav-icons"></i>
                <span className="navbar-score"> 999999 $</span>
            </ul>
        </nav>
    )
    
}

export default Navbar;


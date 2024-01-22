import React from 'react';
import { useState } from 'react';
import './../App.css';
import logo from '../assets/Logo.svg';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className={`navbar ${openMenu ? 'open' : ''}`}>
            <a href='/'>
                <img src={logo} alt='Little Lemon App'/>
            </a>

            {/*Mobile version*/}
            <div className='burger-menu-icon' onClick={toggleMenu}>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
            </div>
            {/*Web version*/}
            <ul className={`nav-links ${openMenu ? 'visible' : ''}`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
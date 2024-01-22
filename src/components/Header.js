import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../images/homePage.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner-section'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owned Mediterranean restaurant,
                        focused on traditional recipes served with a
                        modern twist.
                    </p>
                    <Link to='/booking'><button aria-label='On Click'>Reserve a Table</button></Link>
                </div>
                <div className='img-banner'>
                    <img src={headerImg} alt='Home Page'/>
                </div>
            </section>
        </header>
    );
};

export default Header;
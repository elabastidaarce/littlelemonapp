import React from 'react';
import littleLemonLogo from '../assets/Logo.svg'

const Footer = () => {
    return (
        <div className='footer-section'>
        <footer>
            <section>
                <div className='footer-info'>
                    <img src={littleLemonLogo} alt='Little Lemon'/>
                </div>
                <div>
                    <h3 className='footer-title'>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Services</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer-title'>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Town Street, Chicago</li>
                        <li>Phone: <br/> +00 123 456 789</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer-title'>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
        </div>
    );
};

export default Footer;
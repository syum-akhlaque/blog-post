//rsc for shortcut
import React from 'react';
import './Header.css';
const header = () => {
    return (
        <div className='header'>
           {/* <img src={logo} alt=""/> */}
           <h1>WELCOME TO MY BLOG</h1>
           <nav>
               <a href="/blog">BLOG</a>      
           </nav>
           <p>Discover yourself</p>
           <p>Discover yourself</p>
        </div>
    );
};

export default header;
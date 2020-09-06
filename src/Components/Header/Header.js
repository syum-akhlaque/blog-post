//rsc for shortcut
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const header = () => {
    return (
        <div className='header'>
           {/* <img src={logo} alt=""/> */}
           <h2>Welcome To My Blog</h2>
           <nav>
               <a href="/blog">Blog</a>
           </nav>
        </div>
    );
};

export default header;
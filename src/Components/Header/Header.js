//rsc for shortcut
import React from 'react';
import './Header.css';
const header = () => {
    return (
        <div className='header'>
           {/* <img src={logo} alt=""/> */}
           <h2>Welcome To My Blog</h2>
           <nav>
               <a href="/Blog">shop</a>
               
           </nav>
        </div>
    );
};

export default header;
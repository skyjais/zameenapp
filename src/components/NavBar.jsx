import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link className="link" to="/"> 
        <img src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png" alt="" />
         
        </Link>
   
        <div className="location-dropdown">
          <select name="drop" id="drop" className='select'  >
            <option value="Benglore"  >Bengaluru</option>
            <option value="Mysuru">Mysuru</option>
          </select>
          
        </div>

        
      </div>
      <nav className={isOpen ? "is-active" : ""}>
        <Link className="link" to="/buy">
          Buy
        </Link>
        <Link className="link" to="/rent">
          Rent
        </Link>
        <Link className="link" to="/sell">
          Sell
        </Link>
        <Link className="link" to="/pg">
          PG
        </Link>
        <Link className="link" id="postprop" to="/post-property">
          Post Property
        </Link>
      </nav>
      <div className="login">
        <Link className="link" id="log" to="/login">
          Login
        </Link>
      </div>


    </header>
  );
};

export default NavBar;
// src/NavBar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png" alt="Zameen Square" className="logo" />
//         <div className="location-dropdown">
//           <select name="drop" id="drop" className='select'  >
//             <option value="Benglore"  >Benglore</option>
//             <option value="Mysuru">Mysuru</option>
//           </select>
          
//         </div>
//       </div>
//       <div className="navbar-center">
//         <Link to="/buy" className="nav-link">Buy</Link>
//         <Link to="/rent" className="nav-link">Rent</Link>
//         <Link to="/sell" className="nav-link">Sell</Link>
//         <Link to="/pg" className="nav-link">PG</Link>
//       {/* </div>
//       <div className="navbar-right"> */}
//         <Link to="/post-property" className="post-property-button">Post Property</Link>
//         <button className="login-button">Login</button>
//       </div>
//     </nav>
//   );
// };

//export default NavBar;

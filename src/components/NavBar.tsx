import React from 'react';
import "../styles/NavBar.css";
import { IoPawSharp } from 'react-icons/io5';

const NavBar: React.FC<{}> = () => {
  return (
    <nav className='NavBar'>
      <div className='logo-container'>
        <span><IoPawSharp className='logo-img'/>PawHub</span>
      </div>
    </nav>
  )
}

export default NavBar;
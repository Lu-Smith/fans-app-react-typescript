import React from 'react';
import "../styles/NavBar.css";
import { IoPawSharp } from 'react-icons/io5';
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;


type Link ={
  label: string;
  href: string;
}

const Links: React.FC<{links: Link[]}> = ( { links}) => {
  return (
    <div className='menu-container'>
    {links.map((link: Link) => {
      return (
        <div className='menu-link' key={link.href}>
          <a href={link.href}>
            {link.label}
          </a>
        </div>
      )
    })}
  </div>
  );
}

const NavBar: React.FC<{}> = () => {
  return (
    <nav className='NavBar'>
      <div className='logo-container'>
        <span><IoPawSharp className='logo-img'/>PawHub</span>
      </div>
      <Links links={links}/>
    </nav>
  )
}

export default NavBar;
import React from 'react';
import "../styles/Footer.css";
import * as data from './socialmedia.json';
const socialmediaString = JSON.stringify(data);
const socialmedia = JSON.parse(socialmediaString).socialmedia;


type LinkSocial = {
  name: string;
  href: string;
};

const SocialMedia: React.FC<{socialmedia: LinkSocial[]}> = ({socialmedia}) => {
  return (
    <div>
      {socialmedia.map((social: LinkSocial) => {
         return (
            <div key={social.name}>
              <a href={social.href} target="_blank" rel="noreferrer">{social.name}</a>
            </div>  
         )
      })}
    </div>
  );
}

const Footer: React.FC<{}> = () => {
  return (
    <div className='Footer'>
    <SocialMedia socialmedia={socialmedia} />
    <div>Coded by <a href="https://www.lunasmithart.com/" target="_blank" rel="noreferrer">Luna Smith</a>, open source on <a href="https://github.com/Lu-Smith/fans-app-react-typescript" target="_blank" rel="noreferrer">GitHub</a></div>
    </div>
  )
}

export default Footer;
import React from 'react'
import { IState as Props } from '../App';
import "../styles/Main.css";

interface IProps {
  members: Props["members"]
}

const Main: React.FC<IProps> = ( {members} ) => {

const renderMembers = (): JSX.Element[] => {
  return members.map(member => {
    return (
      <li key={member.petName}>
        <div className='petAvatar'>
          <img src={member.img} alt="member pet" />
          <h2>{member.petName}</h2>
        </div>
        <div>
          <div className='moreInfo'>
           <h3>PET</h3>
           <div className='petInfo'>
             <p>age: {member.petAge}</p>
             <p>type: {member.pet}</p>
           </div>
         </div>
         <div className='ownerInfo'>
          <h3>OWNER</h3>
          <p>{member.ownerName}</p>
          <p>{member.note}</p>
         </div>
        </div>
      </li>
    )
  })
}

  return (
    <div className='Main'>
         <h1> PawHub is the place that rewards real Pets lovers</h1>
         <ul>
           {renderMembers()}
         </ul>
    </div>
  )
}

export default Main;
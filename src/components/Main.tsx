import React from 'react'
import { IState as Props } from '../App';
import AddMember from './AddMember';
import "../styles/Main.css";

interface IProps {
  setMembers: React.Dispatch<React.SetStateAction<Props["members"]>>
  members: Props["members"]
}

const Main: React.FC<IProps> = ( {members, setMembers}) => {

const renderMembers = (): JSX.Element[] => {
  return members.map(member => {
    return (
      <li>
        <div className='petAvatar'>
          <img src={member.img} alt="member pet" />
          <h2>{member.petName}</h2>
        </div>
        <div>
        <div className='moreInfo'>
          <h3>PET</h3>
          <div className='petInfo'>
          <p>age: {member.petAge}</p>
          <p>species: {member.pet}</p>
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
         <AddMember members={members} setMembers={setMembers}/>
    </div>
  )
}

export default Main;
import React from 'react'
import { IState as Props } from '../App';
import AddMember from './AddMember';

interface IProps {
  members: Props["members"]
}

const Main: React.FC<IProps> = ( {members}) => {

const renderMembers = (): JSX.Element[] => {
  return members.map(member => {
    return (
      <li>{member.name}</li>
    )
  })
}

  return (
    <div>
         <h1> PawHub is the place that rewards real Pets lovers</h1>
         <ul>
           {renderMembers()}
         </ul>
         <AddMember />
    </div>
  )
}

export default Main;
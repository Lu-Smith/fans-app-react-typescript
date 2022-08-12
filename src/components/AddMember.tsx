import React, { useState } from 'react';
import { IState as Props } from '../App';
import "../styles/AddMember.css";

interface IProps {
    setMembers: React.Dispatch<React.SetStateAction<Props["members"]>>
    members: Props["members"]
}

const AddMember:  React.FC<IProps> = ({setMembers, members}) => {

    const [input, setInput] = useState({
        petName: "",
        ownerName: "",
        petAge: "",
        note: "",
        img: "",
        pet: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }) 
    }

    const handleClick = (e: React.FormEvent<EventTarget & HTMLButtonElement>) => {
        e.preventDefault();
        if(!input.petName && !input.petAge && !input.pet && !input.img) 
        return
         setMembers([
            ...members,
            {
                ownerName: input.ownerName,
                img: input.img,
                note: input.note,
                pet: input.pet,
                petAge: parseInt(input.petAge),
                petName: input.petName,
            }
          ]);

          
        setInput({
            ownerName: "",
            img: "",
            note: "",
            pet: "",
            petAge: "",
            petName:"",
        })

    }

  return (
    <div className='AddMember'>
        <form>
            <input 
              type="text"
              placeholder="Your pet name"
              onChange={handleChange}
              name="petName"
              value={input.petName}
            />
            <input 
              type="text"
              placeholder="Your pet age"
              onChange={handleChange}
              name="petAge"
              value={input.petAge}
            />
            <input 
              type="text"
              placeholder="Your pet photo"
              onChange={handleChange}
              name="img"
              value={input.img}
            />
             <input 
              type="text"
              placeholder="Your pet type"
              onChange={handleChange}
              name="pet"
              value={input.pet}
            />
            <input 
              type="text"
              placeholder="Owner name"
              onChange={handleChange}
              name="ownerName"
              value={input.ownerName}
            />
            <textarea
              placeholder="Note"
              onChange={handleChange}
              name="note"
              value={input.note}
            />
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}

export default AddMember;
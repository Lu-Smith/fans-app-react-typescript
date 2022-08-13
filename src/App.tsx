import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import AddMember from './components/AddMember';

export interface IState {
  members: {
    ownerName: string
    img: string
    note: string
    pet: string
    petAge: number
    petName: string
  }[]
}

function App() {
const [members, setMembers] = useState<IState["members"]>([
  {
    ownerName: "Alice Chow",
    img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    note: "“No matter how you're feeling, a little dog gonna love you.”",
    pet: "cat",
    petAge: 4,
    petName: "Donald"
  },
  {
    ownerName: "Harry S Truman",
    img: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    note: "“You want a friend in Washington? Get a dog.”",
    pet: "dog",
    petAge: 6,
    petName: "Spark",
  },
])

  return (
    <div className="App">
      <NavBar />
      <div className='main-space'>
      <AddMember members={members} setMembers={setMembers} />
      <Main members={members} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

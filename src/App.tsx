import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';

export interface IState {
  members: {
    name: string
    age: number
    img: string
    note: string
    pet: string
    petAge: number
  }[]
}

function App() {
const [members, setMembers] = useState<IState["members"]>([
  {
    name: "Alice Chow",
    age: 54,
    img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    note: "“No matter how you're feeling, a little dog gonna love you.”",
    pet: "Cat",
    petAge: 4,
  },
  {
    name: "Harry S Truman",
    age: 54,
    img: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    note: "“You want a friend in Washington? Get a dog.”",
    pet: "Dog",
    petAge: 6,
  },
])

  return (
    <div className="App">
      <NavBar />
      <Main members={members} />
      <Footer />
    </div>
  );
}

export default App;

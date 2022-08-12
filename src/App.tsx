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
    name: "string",
    age: 54,
    img: "string",
    note: "string",
    pet: "string",
    petAge: 4,
  },
  {
    name: "string",
    age: 54,
    img: "string",
    note: "string",
    pet: "string",
    petAge: 4,
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

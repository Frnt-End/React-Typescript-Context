import React, { useState } from 'react';
import { AppProvider } from './Contexts/AppCntxt'
import './App.css';
import List from './Components/List';
import FormList from './Components/FormList';

export interface IState {
  users: {
    img: string,
    name: string,
    position: string
    note?: string
  }[]
}


export const avatarUrl = {
  young: "https://nirit.website/projects/react-typescript-context/img/avatar5.png",
  female: "https://nirit.website/projects/react-typescript-context/img/avatar10.png",
  adult: "https://nirit.website/projects/react-typescript-context/img/avatar2.png",
  other: "https://nirit.website/projects/react-typescript-context/img/avatar4.png",
  unique: "https://nirit.website/projects/react-typescript-context/img/avatar13.png"
}



function App() {


  const [users, setUsers] = useState<IState["users"]>([
    {
      name: "Jonas Kernn",
      position: "Frontend Engineer",
      img: avatarUrl.other,
      note: "Loves weekends..😉!"
    },
    {
      name: "Morin Levi",
      position: "Backend Engineer",
      img: avatarUrl.young,
      note: "Addicted to smoothies..🥤"
    }
  ])




  return (
    <>
      <AppProvider>
        <div className="app">
            <div className="header">
              <FormList setUsers={setUsers} users={users} maxlength={20} />
              <List users={users} />
            </div>
        </div>
      </AppProvider>

        </>
  );
}


export default App;

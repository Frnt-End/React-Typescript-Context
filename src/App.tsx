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
  young: "https://carismartes.com.br/assets/global/images/avatars/avatar5_big@2x.png",
  female: "https://carismartes.com.br/assets/global/images/avatars/avatar10_big@2x.png",
  adult: "https://carismartes.com.br/assets/global/images/avatars/avatar2_big@2x.png",
  other: "https://carismartes.com.br/assets/global/images/avatars/avatar4_big@2x.png",
  unique: "https://carismartes.com.br/assets/global/images/avatars/avatar13_big@2x.png"
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

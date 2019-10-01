import React, { useState } from 'react';

import Form from './components/Form';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  
  const addUser = (user) => {
    setUsers([...users, user]);
  }
  return (
    <div className="onboard-form">
      <Form  addUser={addUser}/>
      <hr />
      {users.map(user => {
        return <div key={user.email} className='user-box'>{user.name}</div>;
      })}
    </div>
  );
}

export default App;

import React from 'react';


const Users = (props) => {
  const { users } = props;
  debugger;

  return (
    <ul>
      {users.map(user => {
        return <li key={user.email}>{user.name}</li>;
      })}
    </ul>
  )
}

export default Users;

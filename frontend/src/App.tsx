import React, { useEffect, useState } from 'react';
import { api } from './services/api';

interface IUser {
  id: number;
  name: string;
  email: string;
}

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    })
  }, []);


  return (
    <div className="App">
      { users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const useUsers = (search: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      });
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return { users: filtered, loading };
};
import axios from 'axios';

export async function fetchUsers() {
  const users = await axios.get('/api/users');
  return users.data;
}

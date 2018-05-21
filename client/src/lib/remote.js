import axios from 'axios';

export async function fetchUsers() {
  const users = await axios.get('/api/users');
  return users.data;
}

export async function updateDbEntry(user) {
  const res = await axios.put(`/api/users/${user.username}`, {
    data: user,
  });
  return res.data.data;
}

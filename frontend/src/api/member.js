import axios from 'axios';

export const accounts = (id, password) => {
  return axios.post('url', {
    id,
    password,
  });
};

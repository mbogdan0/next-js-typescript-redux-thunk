import axios from 'axios';

export const fetchCreatePost = (data) => {
  const uri = `${process.env.API_ENDPOINT}/api/entry/create`;
  return axios.post(uri, data);
};

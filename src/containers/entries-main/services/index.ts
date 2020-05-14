import axios from 'axios';
import { ApiResponse } from '../../../types/api-response';
import { Entry } from '../../../types/entry';

export const fetchMainPosts = (): ApiResponse<Entry[]> => {
  const uri = `${process.env.API_ENDPOINT}/api/entry/list`;
  return axios.get(uri);
};

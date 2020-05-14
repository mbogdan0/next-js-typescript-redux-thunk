import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/root-reducer';
import {
  CREATE_POST_DONE,
  CREATE_POST_ERROR_FETCHING,
  CREATE_POST_START_FETCHING,
  CreatePostActionTypes,
} from './types';
import { fetchCreatePost } from '../services';

export const thunkFetchAddPost = (payload):
  ThunkAction<Promise<void>, AppState, unknown, CreatePostActionTypes> => {
  return async (dispatch: ThunkDispatch<{}, {}, CreatePostActionTypes>): Promise<void> => {
    dispatch({ type: CREATE_POST_START_FETCHING });
    try {
      await fetchCreatePost(payload);
      dispatch({ type: CREATE_POST_DONE });
    } catch (e) {
      const errorMessage = e?.response?.data?.error || e.toString();
      dispatch({
        type: CREATE_POST_ERROR_FETCHING,
        payload: errorMessage,
      });
    }
  };
};

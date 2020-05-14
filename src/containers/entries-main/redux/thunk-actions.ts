import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/root-reducer';
import {
  MAIN_ENTRIES_ERROR_FETCHING,
  MAIN_ENTRIES_START_FETCHING,
  MAIN_ENTRIES_SUCCESS_FETCHING,
  MainEntriesActionTypes,
} from './types';
import { fetchMainPosts } from '../services';

export const thunkFetchEntriesMain = ():
  ThunkAction<Promise<void>, AppState, unknown, MainEntriesActionTypes> => {
  return async (dispatch: ThunkDispatch<{}, {}, MainEntriesActionTypes>): Promise<void> => {
    dispatch({ type: MAIN_ENTRIES_START_FETCHING });
    try {
      const response = await fetchMainPosts();
      dispatch({
        type: MAIN_ENTRIES_SUCCESS_FETCHING,
        payload: response?.data?.payload,
      });
    } catch (e) {
      const errorMessage = e?.response?.data?.error || e.toString();
      dispatch({
        type: MAIN_ENTRIES_ERROR_FETCHING,
        payload: errorMessage,
      });
    }
  };
};

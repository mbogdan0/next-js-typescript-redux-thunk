import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/root-reducer';
import {
  FILE_UPLOAD_START_FETCHING,
  FileUploadActionTypes,
} from './types';


export const thunkFetchUploadFile = ():
  ThunkAction<Promise<void>, AppState, unknown, FileUploadActionTypes> => {
  return async (dispatch: ThunkDispatch<{}, {}, FileUploadActionTypes>): Promise<void> => {
    dispatch({ type: FILE_UPLOAD_START_FETCHING, payload: [] });
  };
};

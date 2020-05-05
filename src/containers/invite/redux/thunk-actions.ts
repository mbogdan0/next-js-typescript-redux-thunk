import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  InvitesActionTypes,
  INVITE_START_FETCHING,
  INVITE_FILL,
  INVITE_ERROR_FETCHING,
  INVITE_ADD_FETCHING,
  Invite, INVITE_ADD_FILL, INVITE_ADD_ERROR
} from './types';
import { AppState } from '../../../redux/root-reducer';
import { fetchAllInvites, fetchAddInvite } from '../services';


export const thunkFetchInvites = ():
  ThunkAction<Promise<void>, AppState, unknown, InvitesActionTypes> => {
  return async (dispatch: ThunkDispatch<{}, {}, InvitesActionTypes>): Promise<void> => {
    dispatch({ type: INVITE_START_FETCHING });
    try {
      const result = await fetchAllInvites();
      dispatch({
        type: INVITE_FILL,
        payload: result.payload,
      });
    } catch (e) {
      dispatch({
        type: INVITE_ERROR_FETCHING,
        payload: e.toString(),
      });
    }
  };
};

export const thunkAddInvite = (payload: Invite):
  ThunkAction<Promise<void>, AppState, unknown, InvitesActionTypes> => {
  return async (dispatch: ThunkDispatch<{}, {}, InvitesActionTypes>): Promise<void> => {
    dispatch({ type: INVITE_ADD_FETCHING, payload });
    try {
      const result = await fetchAddInvite();
      dispatch({
        type: INVITE_ADD_FILL,
        payload: result.payload,
      });
    } catch (e) {
      dispatch({
        type: INVITE_ADD_ERROR,
        payload: e.toString(),
      });
    }
  };
};

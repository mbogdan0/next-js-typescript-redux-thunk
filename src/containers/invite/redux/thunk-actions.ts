import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { InvitesActionTypes } from './types';
import { AppState } from '../../../redux/root-reducer';
import { inviteStartFetching, inviteFillFetching, inviteErrorFetching } from './actions';
import { fetchAllInvites } from '../services';

export const thunkFetchInvites = ():
  any => {
  return async (dispatch: any): Promise<void> => {
    dispatch(inviteStartFetching());
    try {
      const result = await fetchAllInvites();
      dispatch(inviteFillFetching(result.payload));
    } catch (e) {
      dispatch(inviteErrorFetching(e.toString()));
    }
  };
};

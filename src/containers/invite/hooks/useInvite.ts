import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/root-reducer';
import { InvitesState } from '../redux/reducer';
import { Invite } from '../redux/types';
import { thunkAddInvite, thunkFetchInvites } from '../redux/thunk-actions';

export const useInvite = () => {
  const { loading, data, error } = useSelector<AppState, InvitesState>((state) => state.invites);
  const dispatch = useDispatch();
  const add = (payload: Invite) => {
    dispatch(thunkAddInvite(payload));
  };
  const load = () => {
    dispatch(thunkFetchInvites());
  };
  return {
    loading,
    data,
    error,
    add,
    load,
  };
};

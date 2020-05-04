import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppState } from '../../../redux/root-reducer';
import { InvitesState } from '../redux/reducer';
import {
  Invite,
  INVITE_ERROR_FETCHING,
  INVITE_FILL,
  INVITE_START_FETCHING,
  InvitesActionTypes,
} from '../redux/types';
import { inviteFillFetching, inviteStartFetching } from '../redux/actions';

export const useInvite = () => {
  const { loading, data, error } = useSelector<AppState, InvitesState>((state) => state.invites);
  const dispatch = useDispatch();
  const dispatchAction = (action: InvitesActionTypes) => dispatch(action);
  const add = (payload: Invite) => {
    const list = [...data, payload];
    setTimeout(() => {
      dispatchAction(inviteFillFetching(list));
    }, 1000);
  };

  const load = () => {
    dispatchAction(inviteStartFetching());
    setTimeout(() => {
      const payload = [
        {
          text: 'hi honey',
          id: 1,
        },
        {
          text: 'oh honey',
          id: 2,
        },
      ];
      dispatchAction(inviteFillFetching(payload));
    }, 1000);
  };
  return {
    loading,
    data,
    error,
    add,
    load,
  };
};

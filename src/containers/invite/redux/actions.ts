import {
  Invite,
  INVITE_ERROR_FETCHING,
  INVITE_FETCH_ASYNC,
  INVITE_FILL,
  INVITE_START_FETCHING,
  InvitesActionTypes,
} from './types';

export function inviteFetchAsync(): InvitesActionTypes {
  return {
    type: INVITE_FETCH_ASYNC,
  };
}

export function inviteStartFetching(): InvitesActionTypes {
  return {
    type: INVITE_START_FETCHING,
  };
}

export function inviteFillFetching(data: Invite[]): InvitesActionTypes {
  return {
    type: INVITE_FILL,
    payload: data,
  };
}

export function inviteErrorFetching(data: string): InvitesActionTypes {
  return {
    type: INVITE_ERROR_FETCHING,
    payload: data,
  };
}

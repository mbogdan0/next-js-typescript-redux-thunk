export type Invite = {
  id: number;
  text: string;
};

export const INVITE_START_FETCHING = 'INVITE_START_FETCHING';
type InviteStartFetchingAction = {
  type: typeof INVITE_START_FETCHING;
};

export const INVITE_FILL = 'INVITE_FILL';
export type InviteFillAction = {
  type: typeof INVITE_FILL;
  payload: Invite[];
};

export const INVITE_ERROR_FETCHING = 'INVITE_ERROR_FETCHING';
export type InviteErrorFetchingAction = {
  type: typeof INVITE_ERROR_FETCHING;
  payload: string;
};

export const INVITE_FETCH_ASYNC = 'INVITE_FETCH_ASYNC';
type InviteFetchAsyncAction = {
  type: typeof INVITE_FETCH_ASYNC;
};

export type InvitesActionTypes =
  | InviteStartFetchingAction
  | InviteFillAction
  | InviteErrorFetchingAction
  | InviteFetchAsyncAction;

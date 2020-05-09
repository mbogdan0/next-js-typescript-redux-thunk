
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

export const INVITE_ADD_FETCHING = 'INVITE_ADD_FETCHING';
export type InviteAddFetchingAction = {
  type: typeof INVITE_ADD_FETCHING;
  payload: Invite;
};

export const INVITE_ADD_FILL = 'INVITE_ADD_FILL';
export type InviteAddFillAction = {
  type: typeof INVITE_ADD_FILL;
  payload: Invite[];
};

export const INVITE_ADD_ERROR = 'INVITE_ADD_ERROR';
export type InviteAddErrorAction = {
  type: typeof INVITE_ADD_ERROR;
  payload: string;
};


export type InvitesActionTypes =
  | InviteStartFetchingAction
  | InviteFillAction
  | InviteErrorFetchingAction
  | InviteAddFetchingAction
  | InviteAddFillAction
  | InviteAddErrorAction;

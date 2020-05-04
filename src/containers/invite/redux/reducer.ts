import {
  Invite,
  INVITE_ERROR_FETCHING,
  INVITE_FETCH_ASYNC,
  INVITE_FILL,
  INVITE_START_FETCHING,
  InvitesActionTypes,
} from './types';

export type InvitesState = {
  data: Invite[];
  loading: boolean;
  error: null | string;
};

const initialState: InvitesState = {
  data: [],
  loading: false,
  error: null,
};

export const invitesReducer = (state = initialState, action: InvitesActionTypes): InvitesState => {
  switch (action.type) {
    case INVITE_START_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case INVITE_FILL:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case INVITE_ERROR_FETCHING:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case INVITE_FETCH_ASYNC:
      return state;
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};

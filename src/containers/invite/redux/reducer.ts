import {
  Invite,
  INVITE_ADD_ERROR,
  INVITE_ADD_FETCHING,
  INVITE_ADD_FILL,
  INVITE_ERROR_FETCHING,
  INVITE_FILL,
  INVITE_START_FETCHING,
  InvitesActionTypes,
} from './types';

export type InvitesState = {
  data: Invite[];
  loading: boolean;
  error: null | string;
  loadingAdd: boolean;
  errorAdd: null | string;
};

const initialState: InvitesState = {
  data: [],
  loading: false,
  error: null,
  loadingAdd: false,
  errorAdd: null,
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
    case INVITE_ADD_FETCHING:
      return {
        ...state,
        loadingAdd: true,
        errorAdd: null,
      };
    case INVITE_ADD_FILL:
      return {
        ...state,
        loadingAdd: false,
        data: action.payload,
        errorAdd: null,
      };
    case INVITE_ADD_ERROR:
      return {
        ...state,
        loadingAdd: false,
        errorAdd: action.payload,
      };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};

import {
  MAIN_ENTRIES_ERROR_FETCHING,
  MAIN_ENTRIES_START_FETCHING,
  MAIN_ENTRIES_SUCCESS_FETCHING,
  MainEntriesActionTypes,
} from './types';
import { Entry } from '../../../types/entry';

export type EntriesMainState = {
  loading: boolean;
  success: boolean;
  data: Entry[];
  error: null | string;
};

const initialState: EntriesMainState = {
  loading: false,
  success: false,
  data: [],
  error: null,
};

export const mainEntriesReducer = (state = initialState, action: MainEntriesActionTypes): EntriesMainState => {
  switch (action.type) {
    case MAIN_ENTRIES_START_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MAIN_ENTRIES_SUCCESS_FETCHING:
      return {
        ...state,
        success: true,
        data: action.payload,
        loading: false,
        error: null,
      };
    case MAIN_ENTRIES_ERROR_FETCHING:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};

import { Entry } from '../../../types/entry';

export const MAIN_ENTRIES_START_FETCHING = 'MAIN_ENTRIES_START_FETCHING';
type MainEntriesStartFetchingAction = {
  type: typeof MAIN_ENTRIES_START_FETCHING;
};

export const MAIN_ENTRIES_SUCCESS_FETCHING = 'MAIN_ENTRIES_SUCCESS_FETCHING';
export type MainEntriesSuccessFetchingAction = {
  type: typeof MAIN_ENTRIES_SUCCESS_FETCHING;
  payload: Entry[];
};

export const MAIN_ENTRIES_ERROR_FETCHING = 'MAIN_ENTRIES_ERROR_FETCHING';
export type MainEntriesErrorFetchingAction = {
  type: typeof MAIN_ENTRIES_ERROR_FETCHING;
  payload: string;
};

export type MainEntriesActionTypes =
  | MainEntriesStartFetchingAction
  | MainEntriesSuccessFetchingAction
  | MainEntriesErrorFetchingAction;

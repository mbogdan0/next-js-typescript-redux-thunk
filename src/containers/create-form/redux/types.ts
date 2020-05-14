
export const CREATE_POST_START_FETCHING = 'CREATE_POST_START_FETCHING';
type CreatePostStartFetchingAction = {
  type: typeof CREATE_POST_START_FETCHING;
};

export const CREATE_POST_DONE = 'CREATE_POST_DONE';
export type CreatePostDoneAction = {
  type: typeof CREATE_POST_DONE;
};

export const CREATE_POST_ERROR_FETCHING = 'CREATE_POST_ERROR_FETCHING';
export type CreatePostErrorFetchingAction = {
  type: typeof CREATE_POST_ERROR_FETCHING;
  payload: string;
};

export type CreatePostActionTypes =
  | CreatePostStartFetchingAction
  | CreatePostDoneAction
  | CreatePostErrorFetchingAction;

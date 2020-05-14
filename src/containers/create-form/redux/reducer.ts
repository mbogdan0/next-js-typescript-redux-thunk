import {
  CreatePostActionTypes,
  CREATE_POST_START_FETCHING,
  CREATE_POST_DONE,
  CREATE_POST_ERROR_FETCHING,
} from './types';

export type AddPostState = {
  loading: boolean;
  success: boolean;
  error: null | string;
};

const initialState: AddPostState = {
  loading: false,
  success: false,
  error: null,
};

export const addPostReducer = (state = initialState, action: CreatePostActionTypes): AddPostState => {
  switch (action.type) {
    case CREATE_POST_START_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_POST_DONE:
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      };
    case CREATE_POST_ERROR_FETCHING:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};

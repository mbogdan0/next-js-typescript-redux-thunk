import {
  FILE_UPLOAD_ERROR_FETCHING,
  FILE_UPLOAD_START_FETCHING,
  FILE_UPLOAD_SUCCESS_FETCHING,
  FileData,
  FileUploadActionTypes,
} from './types';

export type FileUploadState = {
  loading: boolean;
  error: null | string;
  data: FileData[];
};

const initialState: FileUploadState = {
  loading: false,
  data: [],
  error: null,
};

export const fileUploadReducer = (state = initialState, action: FileUploadActionTypes): FileUploadState => {
  switch (action.type) {
    case FILE_UPLOAD_START_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FILE_UPLOAD_SUCCESS_FETCHING:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    case FILE_UPLOAD_ERROR_FETCHING:
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

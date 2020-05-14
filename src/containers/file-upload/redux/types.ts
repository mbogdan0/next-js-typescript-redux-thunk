
export const FILE_UPLOAD_START_FETCHING = 'FILE_UPLOAD_START_FETCHING';
type FileUploadStartFetchingAction = {
  type: typeof FILE_UPLOAD_START_FETCHING;
  payload: any;
};

export const FILE_UPLOAD_SUCCESS_FETCHING = 'FILE_UPLOAD_SUCCESS_FETCHING';
export type FileUploadSuccessFetchingAction = {
  type: typeof FILE_UPLOAD_SUCCESS_FETCHING;
  payload: any;
};

export const FILE_UPLOAD_ERROR_FETCHING = 'FILE_UPLOAD_ERROR_FETCHING';
export type FileUploadErrorFetchingAction = {
  type: typeof FILE_UPLOAD_ERROR_FETCHING;
  payload: string;
};

export type FileData = {
  id: string;
  src: string;
};

export type FileUploadActionTypes =
  | FileUploadStartFetchingAction
  | FileUploadSuccessFetchingAction
  | FileUploadErrorFetchingAction;

import { combineReducers } from 'redux';
import { themeReducer as theme } from '../styled/theme/reducer';
import { addPostReducer as addPost } from '../containers/create-form/redux/reducer';
import { mainEntriesReducer as mainEntries } from '../containers/entries-main/redux/reducer';
import { fileUploadReducer as fileUpload } from '../containers/file-upload/redux/reducer';

export const rootReducer = combineReducers({
  theme,
  addPost,
  mainEntries,
  fileUpload,
});

export type AppState = ReturnType<typeof rootReducer>;

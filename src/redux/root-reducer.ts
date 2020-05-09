import { combineReducers } from 'redux';
import { invitesReducer as invites } from '../containers/invite/redux/reducer';
import { themeReducer as theme } from '../styled/theme/reducer';

export const rootReducer = combineReducers({
  invites,
  theme,
});

export type AppState = ReturnType<typeof rootReducer>;

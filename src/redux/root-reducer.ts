import { combineReducers } from 'redux';

import { invitesReducer as invites } from '../containers/invite/redux/reducer';

export const rootReducer = combineReducers({
  invites,
});

export type AppState = ReturnType<typeof rootReducer>;

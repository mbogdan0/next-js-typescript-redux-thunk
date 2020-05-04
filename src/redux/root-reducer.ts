import { combineReducers, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { invitesReducer as invites } from '../containers/invite/redux/reducer';

export const rootReducer = combineReducers({
  invites,
});

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

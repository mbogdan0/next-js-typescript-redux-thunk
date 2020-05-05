import { NextPageContext } from 'next';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../redux/root-reducer';


export interface ContextProps extends NextPageContext {
  reduxStore: {
    dispatch: ThunkDispatch<AppState, {}, Action<any>>;
  };
}

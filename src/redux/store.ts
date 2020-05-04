import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { END } from 'redux-saga';
import { rootReducer } from './root-reducer';
import { middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './root-saga';


export const initializeStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  const rootSagas = sagaMiddleware.run(rootSaga);
  // eslint-disable-next-line
   (store as any).close = () => (store as any).dispatch(END);
  return {
    store,
    rootSagas,
  };
};

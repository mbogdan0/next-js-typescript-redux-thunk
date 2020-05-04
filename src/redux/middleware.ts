import { Middleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [
  sagaMiddleware,
  thunk,
];

export { middleware, sagaMiddleware };

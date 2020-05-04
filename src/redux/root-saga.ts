import { all } from 'redux-saga/effects';
import { watchInvites } from '../containers/invite/saga';


export function* rootSaga(): Generator {
  yield all([
    watchInvites(),
  ]);
}

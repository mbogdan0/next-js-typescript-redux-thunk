import { SagaIterator } from '@redux-saga/core';
import {
  takeEvery, all, call,
} from 'redux-saga/effects';
import { fetchAllInvitesSaga } from './workers';
import { INVITE_FETCH_ASYNC } from '../redux/types';

function* watchFetchInvite(): SagaIterator {
  yield takeEvery(INVITE_FETCH_ASYNC, fetchAllInvitesSaga);
}

export function* watchInvites(): SagaIterator {
  yield all([
    call(watchFetchInvite),
  ]);
}

import { call, put, delay } from 'redux-saga/effects';
import { SagaIterator, END } from '@redux-saga/core';
import { inviteStartFetching, inviteFillFetching, inviteErrorFetching } from '../redux/actions';
import { fetchAllInvites } from '../services';

export function* fetchAllInvitesSaga(): SagaIterator {
  try {
    yield put(inviteStartFetching());
    const result = yield call(fetchAllInvites);
    yield put(inviteFillFetching(result));
  } catch (e) {
    yield put(inviteErrorFetching(e.toString()));
  } finally {
    yield put(END);
  }
}

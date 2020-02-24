import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { RepositoriesTypes } from './types';

export function* load() {
  try {
    const response = yield call(api.get, 'users/baesse/repos');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* watcherSaga() {
  yield takeLatest(RepositoriesTypes.LOAD_REQUEST, load);
}

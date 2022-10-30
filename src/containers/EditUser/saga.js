import { call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_USER_REQUEST } from './constants';
import { updateUser } from './service';
import { updateUserSuccessfully, updateUserFailed } from './actions';

function* updateUserInformation({ payload: { id, data } }) {
  const res = yield call(updateUser, id, data);
  const {
    data: { status },
  } = res;
  if (status) {
    yield put(updateUserSuccessfully());
  } else {
    yield put(updateUserFailed());
  }
}

function* addUser() {
  yield takeEvery(UPDATE_USER_REQUEST, updateUserInformation);
}

export default addUser;
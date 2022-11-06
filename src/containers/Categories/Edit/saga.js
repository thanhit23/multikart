import { call, put, takeEvery } from 'redux-saga/effects';
import {
  UPDATE_CATEGORY_REQUEST,
  GET_CATEGORY_DETAIL_REQUEST,
} from './constants';
import { update, getCategory } from './service';
import {
  updateCategorySuccessfully,
  updateCategoryFailed,
  getCategorySuccessfully,
  getCategoryFailed,
} from './actions';

function* updateCategoryInformation({ payload: { id, data }, navigate }) {
  const res = yield call(update, id, data);
  const {
    data: { status },
  } = res;
  if (status) {
    yield put(updateCategorySuccessfully());
    navigate();
  } else {
    yield put(updateCategoryFailed());
  }
}

function* getCategoryEdit({ payload: { id } }) {
  const res = yield call(getCategory, id);
  const { status, data } = res;
  if (status) {
    yield put(getCategorySuccessfully(data));
  } else {
    const { message } = data;
    yield put(getCategoryFailed(message));
  }
}

function* editCategory() {
  yield takeEvery(UPDATE_CATEGORY_REQUEST, updateCategoryInformation);
  yield takeEvery(GET_CATEGORY_DETAIL_REQUEST, getCategoryEdit);
}

export default editCategory;
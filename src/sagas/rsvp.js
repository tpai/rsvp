import { put, takeLatest } from 'redux-saga/effects';
import { createAction } from "redux-actions";
import { push } from 'react-router-redux';

import { setRSVP } from 'reducers/rsvp';

export const CLICK_NEXT = `${__filename}/CLICK_NEXT`;
export const clickNext = createAction(CLICK_NEXT);

export const sagas = {
  * clickNext ({ payload }) {
    yield put(setRSVP(payload));
    yield put(push('/rsvp_company'));
  },
};

export const watchers = {
  * clickNext () {
    yield takeLatest(CLICK_NEXT, sagas.clickNext);
  },
};

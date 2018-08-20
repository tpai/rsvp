import { put, takeLatest } from 'redux-saga/effects';
import { createAction } from "redux-actions";
import { push } from 'react-router-redux';

import { setRSVPcompany } from 'reducers/rsvpCompany';

export const CLICK_PREVIEW = `${__filename}/CLICK_PREVIEW`;
export const clickPreview = createAction(CLICK_PREVIEW);

export const sagas = {
  * clickPreview ({ payload }) {
    yield put(setRSVPcompany(payload));
    yield put(push('/confirmation'));
  },
};

export const watchers = {
  * clickPreview () {
    yield takeLatest(CLICK_PREVIEW, sagas.clickPreview);
  },
};

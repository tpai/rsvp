import { put, call, select, takeLatest } from 'redux-saga/effects';
import { createAction } from "redux-actions";
import { push } from 'react-router-redux';

import { postRsvp as postRsvpAPI } from 'api/rsvp';
import { asyncStart, asyncSuccess, asyncFailed } from 'reducers/ui';
import { getRsvp, getRsvpCompany } from 'selectors/rsvp';

export const CLICK_SEND = `${__filename}/CLICK_SEND`;
export const clickSend = createAction(CLICK_SEND, value => value);

export const sagas = {
  * clickSend ({ payload }) {
    try {
      const rsvp = yield select(getRsvp);
      const rsvpCompany = yield select(getRsvpCompany);
      yield put(asyncStart());
      const { success, error } = yield call(postRsvpAPI, {
        ...rsvp,
        ...rsvpCompany,
        response: payload,
        timestamp: new Date().getTime(),
      });
      if (success) {
        yield put(asyncSuccess());
        yield put(push('/thanks'));
      } else if (error) {
        console.log(error);
        const { body } = error;
        yield put(asyncFailed(body.message));
      }
    } catch (err) {
      yield put(asyncFailed());
      console.log(err);
    }
  },
};

export const watchers = {
  * clickSend () {
    yield takeLatest(CLICK_SEND, sagas.clickSend);
  },
};

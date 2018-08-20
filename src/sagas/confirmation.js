import { put, call, select, takeLatest } from 'redux-saga/effects';
import { createAction } from "redux-actions";
import { push } from 'react-router-redux';

import { postRsvp as postRsvpAPI } from 'api/rsvp';
import { getRsvp, getRsvpCompany } from 'selectors/rsvp';

export const CLICK_SEND = `${__filename}/CLICK_SEND`;
export const clickSend = createAction(CLICK_SEND, value => value);

export const sagas = {
  * clickSend ({ payload }) {
    try {
      const rsvp = yield select(getRsvp);
      const rsvpCompany = yield select(getRsvpCompany);
      const { success, error } = yield call(postRsvpAPI, {
        ...rsvp,
        ...rsvpCompany,
        response: payload,
      });
      if (success) {
        yield put(push('/thanks'));
      } else if (error) {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

export const watchers = {
  * clickSend () {
    yield takeLatest(CLICK_SEND, sagas.clickSend);
  },
};

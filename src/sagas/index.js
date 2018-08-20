import { all } from 'redux-saga/effects';
import { runWatchers } from 'utils/redux-saga-helpers';

import * as rsvp from './rsvp';
import * as rsvpCompany from './rsvpCompany';
import * as confirmation from './confirmation';

export default function* rootSaga() {
  yield all([
    ...runWatchers(rsvp.watchers),
    ...runWatchers(rsvpCompany.watchers),
    ...runWatchers(confirmation.watchers),
  ]);
}

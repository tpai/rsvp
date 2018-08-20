import { createAction, handleActions } from "redux-actions";

export const SET_RSVP = `${__filename}/SET_RSVP`;

export const setRSVP = createAction(SET_RSVP);

export const initState = {
  name: '',
  nickname: '',
  requirements: [],
  relation: '',
  invitation: '',
  address: '',
};

const reducer = handleActions({
  [SET_RSVP]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, initState);

export default reducer;

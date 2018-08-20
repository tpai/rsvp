import { createAction, handleActions } from "redux-actions";

export const SET_RSVP_COMPANY = `${__filename}/SET_RSVP_COMPANY`;

export const setRSVPcompany = createAction(SET_RSVP_COMPANY);

export const initState = {
  companies: [],
};

const reducer = handleActions({
  [SET_RSVP_COMPANY]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, initState);

export default reducer;

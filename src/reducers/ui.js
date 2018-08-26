import { createAction, handleActions } from "redux-actions";

export const ASYNC_START   = `${__filename}/ASYNC_START`;
export const ASYNC_SUCCESS = `${__filename}/ASYNC_SUCCESS`;
export const ASYNC_FAILED  = `${__filename}/ASYNC_FAILED`;

export const asyncStart   = createAction(ASYNC_START);
export const asyncSuccess = createAction(ASYNC_SUCCESS);
export const asyncFailed  = createAction(ASYNC_FAILED, value => value);

export const initState = {
  state: 'idle',
  error: '',
};

const reducer = handleActions({
  [ASYNC_START]: (state) => ({
    ...state,
    state: 'loading',
  }),
  [ASYNC_SUCCESS]: (state) => ({
    ...state,
    state: 'idle',
  }),
  [ASYNC_FAILED]: (state, action) => ({
    ...state,
    state: 'failed',
    error: action.payload,
  }),
}, initState);

export default reducer;

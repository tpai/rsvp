import { post } from 'utils/fetch';

export const postRsvp = (payload) => post(process.env.API_ENDPOINT, payload);

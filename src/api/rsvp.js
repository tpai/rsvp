import { post } from 'utils/fetch';

export const postRsvp = (payload) => post(`/api/rsvp`, payload);

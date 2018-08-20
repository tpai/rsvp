const myFetch = async (url, options = {}) => {
  const newOptions = {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
    method:      options.method || 'GET',
    body:        JSON.stringify(options.body),
  };
  const response = await fetch(url, newOptions);
  if (response.status >= 500) throw new Error(response);
  const body   = await response.json();
  const result = {
    body,
    status:     response.status,
    statusText: response.statusText,
  };
  return response.status >= 400 ? { error: result } : { success: result };
};

export const get    = myFetch;
export const remove = (url, options)       => myFetch(url, { ...options, method:       'DELETE' });
export const post   = (url, body, options) => myFetch(url, { ...options, body, method: 'POST' });
export const put    = (url, body, options) => myFetch(url, { ...options, body, method: 'PUT' });
export const patch  = (url, body, options) => myFetch(url, { ...options, body, method: 'PATCH' });

export default myFetch;

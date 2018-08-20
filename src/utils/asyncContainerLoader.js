import loadable from 'react-loadable';

const asyncContainerLoader = containerName => loadable({
  loader: () => import(`containers/${containerName}`),
  loading: () => null,
});

export default asyncContainerLoader;

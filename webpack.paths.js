const path = require('path');

const root   = path.resolve(__dirname, '.');
const src    = path.resolve(root, 'src');
const assets = path.resolve(src, 'assets');

module.exports = {
  src,
  'api':         path.resolve(src, 'api'),
  'components':  path.resolve(src, 'components'),
  'constants':   path.resolve(src, 'constants'),
  'utils':       path.resolve(src, 'utils'),
  'stylesheets': path.resolve(src, 'stylesheets'),
  'reducers':    path.resolve(src, 'reducers'),
  'containers':  path.resolve(src, 'containers'),
  'selectors':   path.resolve(src, 'selectors'),
  'store':       path.resolve(src, 'store'),
  'sagas':       path.resolve(src, 'sagas'),

  assets,
  'images':      path.resolve(assets, 'images'),
  'fonts':       path.resolve(assets, 'fonts'),
  'audios':      path.resolve(assets, 'audios'),

  root,
  'dist':        path.resolve(root, 'dist'),
  'tests':       path.resolve(root, 'tests'),
  'mock-data':   path.resolve(root, 'mock-data'),
};

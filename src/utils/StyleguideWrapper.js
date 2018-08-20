import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from 'store';

export default class StyleguideWrapper extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render () {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

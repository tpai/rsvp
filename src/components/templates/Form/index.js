import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import rsvp from 'assets/images/rsvp.svg';
import styles from './styles.scss';

class Form extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }
  static defaultProps = {
    children: null,
  }
  render() {
    const { children } = this.props;
    return (
      <div className={cx(styles['default'], 'transition-item')}>
        <div className={styles['title']} dangerouslySetInnerHTML={{__html: rsvp}} />
        <div className={styles['content']}>
          {children}
        </div>
      </div>
    );
  }
}

export default Form;

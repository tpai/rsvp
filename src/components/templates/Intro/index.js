import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from 'components/elements/Button';
import styles from './styles.scss';

class Intro extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
  }
  static defaultProps = {
    onClick: () => {},
    children: null,
  }
  render () {
    const { onClick, children } = this.props;
    return (
      <div className={cx(styles['default'], 'transition-item')}>
        <div className={styles['space']}>&nbsp;</div>
        <div className={styles['description']}>
          {children}
        </div>
        <div className={styles['next']}>
          <Button
            styleTypes={["icon"]}
            iconType="round-next-dark"
            handleClick={onClick}
          />
        </div>
      </div>
    );
  }
}

export default Intro;

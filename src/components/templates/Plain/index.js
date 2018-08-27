import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from 'components/elements/Button';
import styles from './styles.scss';

class Plain extends PureComponent {
  static propTypes = {
    // multiple custom buttons
    buttonGroup: PropTypes.any,

    // next button
    onClick: PropTypes.func,

    children: PropTypes.any,
  }
  static defaultProps = {
    // multiple custom buttons
    buttonGroup: null,

    // next button
    onClick: () => {},

    children: null,
  }
  render () {
    const {
      buttonGroup,
      onClick,
      children,
    } = this.props;
    return (
      <div className={cx(styles['default'], 'transition-item')}>
        <div className={styles['space']}>&nbsp;</div>
        <div className={styles['description']}>
          {children}
        </div>
        {buttonGroup}
        {!buttonGroup &&
          <div className={styles['next']}>
            <Button
              styleTypes={["icon"]}
              iconType="round-next-dark"
              handleClick={onClick}
            />
          </div>
        }
      </div>
    );
  }
}

export default Plain;

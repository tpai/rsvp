import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from 'components/elements/Button';
import styles from './styles.scss';

class Dark extends PureComponent {
  static propTypes = {
    disableSpace: PropTypes.bool,
    // multiple custom buttons
    buttonGroup: PropTypes.any,

    // next button
    onClick: PropTypes.func,

    children: PropTypes.any,
  }
  static defaultProps = {
    disableSpace: false,
    // multiple buttons
    buttonGroup: null,

    // next button
    onClick: () => {},

    children: null,
  }
  render () {
    const {
      disableSpace,
      buttonGroup,
      onClick,
      children,
    } = this.props;
    return (
      <div className={cx(styles['default'], 'transition-item')}>
        {!disableSpace && <div className={styles['space']}>&nbsp;</div>}
        <div className={styles['description']}>
          {children}
        </div>
        {buttonGroup}
        {!buttonGroup &&
          <div className={styles['next']}>
            <Button
              styleTypes={["icon"]}
              iconType="round-next-light"
              handleClick={onClick}
            />
          </div>
        }
      </div>
    );
  }
}

export default Dark;

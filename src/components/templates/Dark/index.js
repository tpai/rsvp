import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/elements/Button';
import styles from './styles.scss';

class Dark extends PureComponent {
  static propTypes = {
    // multiple custom buttons
    buttonGroup: PropTypes.any,

    // next button
    onClick: PropTypes.func,
    children: PropTypes.any,
  }
  static defaultProps = {
    // multiple buttons
    buttons: null,

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
      <div className={styles['default']}>
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

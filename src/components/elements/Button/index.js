import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.scss';
import iconAdd from 'images/icon-add.svg';
import iconArrowRight from 'images/icon-arrow-right.svg';
import iconRoundNextLight from 'images/round-next-light.svg';
import iconRoundNextDark from 'images/round-next-dark.svg';

const icons = {
  'add': iconAdd,
  'arrow-right': iconArrowRight,
  'round-next-light': iconRoundNextLight,
  'round-next-dark': iconRoundNextDark,
};

class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    styleTypes: PropTypes.arrayOf(PropTypes.oneOf([
      'primary',
      'primary-reverse',
      'secondary-reverse',
      'icon',
      'icon-left',
      'icon-right',
    ])),
    iconType: PropTypes.oneOf(Object.keys(icons)),
    handleClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.any,
  }
  static defaultProps = {
    type: 'button',
    styleTypes: [],
    handleClick: () => {},
    className: '',
    children: null,
  }
  render() {
    const {
      type,
      styleTypes,
      iconType,
      handleClick,
      className,
      children,
      ...props
    } = this.props;
    const buttonClassName = cx(
      styles['button'],
      ...styleTypes.map((t) => styles[t]),
      className,
    );
    const iconAtLeft = styleTypes.indexOf('icon-left') !== -1 || styleTypes.indexOf('icon') !== -1;
    const iconAtRight = styleTypes.indexOf('icon-right') !== -1;
    return (
      <button
        type={type}
        onClick={handleClick}
        className={buttonClassName}
        {...props}
      >
        <div className={styles['wrapper']}>
          {iconAtLeft && <div className={styles['icon']} dangerouslySetInnerHTML={{__html: icons[iconType]}} />}
          {children}
          {iconAtRight && <div className={styles['icon']} dangerouslySetInnerHTML={{__html: icons[iconType]}} />}
        </div>
      </button>
    );
  }
}

export default Button;

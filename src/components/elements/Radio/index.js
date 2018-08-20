import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import cx from 'classnames';

import styles from './styles.scss';

class Radio extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['radio', 'checkbox']),
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    })),
    displayStyle: PropTypes.oneOf(['row', 'column']),
  }
  static defaultProps = {
    name: '',
    type: 'radio',
    values: [],
    displayStyle: 'row',
  }
  render() {
    const {
      name,
      type,
      values,
      displayStyle,
    } = this.props;
    const defaultClassName = cx({
      [styles['default']]: true,
      [styles['row']]: displayStyle === 'row',
      [styles['column']]: displayStyle === 'column',
    });
    return (
      <div className={defaultClassName}>
        {values.map(({ label, value, checked }) => {
          const id = `${name}-${value}`;
          return (
            <Field
              key={id}
              type={type}
              name={name}
              value={value}
              checked={checked}
            >
              {({ input, meta }) => (
                <div className={styles['field']}>
                  <input
                    {...input}
                    id={id}
                    type={type}
                    className={cx({
                      [styles['radio']]: type === 'radio',
                      [styles['checkbox']]: type === 'checkbox',
                      [styles['error']]: meta.error && meta.touched,
                    })}
                  />
                  <label htmlFor={id}>{label}</label>
                </div>
              )}
            </Field>
          );
        })}
      </div>
    );
  }
}

export default Radio;

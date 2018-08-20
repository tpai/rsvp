import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import cx from 'classnames';

import Radio from 'components/elements/Radio';
import styles from './styles.scss';

class Input extends PureComponent {
  static propTypes = {
    // final form props
    name: PropTypes.string,

    // custom props
    type: PropTypes.string,
    options: PropTypes.shape({
      name: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.label,
        value: PropTypes.string,
      })),
    }),
    handleClick: PropTypes.func,
  }
  static defaultProps = {
    name: '',
    type: 'text',
    options: {
      name: '',
      values: [],
    },
    handleClick: () => {},
  }
  render() {
    const {
      // final form props
      name,

      // custom props
      type,
      options: {
        name: optionName,
        values,
      },
      handleClick,
      ...props
    } = this.props;
    return (
      <Field name={name}>
        {({ input, meta }) => (
          <div
            className={cx({
              [styles['default']]: true,
              [styles['error']]: meta.error && meta.touched,
            })}
          >
            <div className={styles['wrapper']}>
              <input
                {...input}
                type={type}
                onClick={handleClick}
                className={styles['input']}
                {...props}
              />
            </div>
            <div className={styles['options']}>
              <Radio
                name={optionName}
                type="checkbox"
                values={values}
              />
            </div>
          </div>
        )}
      </Field>
    );
  }
}

export default Input;

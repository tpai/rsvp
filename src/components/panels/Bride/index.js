import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Intro from 'components/templates/Intro';
import logo from 'images/logo-green.svg';
import styles from './styles.scss';

class Bride extends PureComponent {
  static propTypes = {
    nextPage: PropTypes.func,
  }
  static defaultProps = {
    nextPage: () => {},
  }
  handleClick = () => {
    this.props.nextPage();
  }
  render () {
    return (
      <Intro onClick={this.handleClick}>
        <div>
          <div className={styles['avatar']} dangerouslySetInnerHTML={{__html: logo}} />
          <div className={styles['description']}>
            <p>虎虎設計師</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
          </div>
        </div>
      </Intro>
    );
  }
}

export default Bride;

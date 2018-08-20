import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Intro from 'components/templates/Intro';
import logo from 'images/logo-green.svg';
import styles from './styles.scss';

class Groom extends PureComponent {
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
            <p>1001010000100000  工程師的語言</p>
            <p>Handwritten Font  設計師的浪漫</p>
            <p>&nbsp;</p>
            <p>2015 . 10 . 01  我們在前公司相識</p>
            <p>2018 . 10 . 01  決定攜手共度一生</p>
            <p>&nbsp;</p>
            <p>1001 Milestone</p>
          </div>
        </div>
      </Intro>
    );
  }
}

export default Groom;

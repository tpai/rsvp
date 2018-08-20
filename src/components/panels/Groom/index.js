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
            <p>宅宅工程師</p>
            <p>好人天然呆</p>
            <p>重要的事情常常忘記，</p>
            <p>掉了手機錢包是家常便飯，</p>
            <p>但電影、遊戲和漫畫的細節倒是記得一清二楚。</p>
          </div>
        </div>
      </Intro>
    );
  }
}

export default Groom;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Intro from 'components/templates/Intro';
import groom from 'images/groom-avatar.png';
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
        <div className={styles['default']}>
          <img src={groom} className={styles['avatar']} />
          <pre
            className={styles['description']}
            dangerouslySetInnerHTML={{__html:
`宅宅工程師
雲林西螺人
喜歡追逐技術掉進坑的開發者
愛家戀家的巨蟹座
朋友形容是好人天然呆
腦袋裡裝滿電影動漫的各種小細節
小時玩遊戲 創業寫遊戲 現在囤遊戲`}}
          />
        </div>
      </Intro>
    );
  }
}

export default Groom;

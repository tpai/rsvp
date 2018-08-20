import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Dark from 'components/templates/Dark';
import styles from './styles.scss';

class Speech extends PureComponent {
  static propTypes = {
    nextPage: PropTypes.func,
  }
  static defaultProps = {
    nextPage: () => {},
  }
  handleClickNext = () => {
    this.props.nextPage();
  }
  render() {
    return (
      <Dark onClick={this.handleClickNext}>
        <pre
          className={styles['text']}
          dangerouslySetInnerHTML={{__html:
`在無盡的腦內宇宙裡
始終有一角屬於你
當故事蔓延越來越廣羈絆越來越深
放閃日記已然成為日常
是時候給觀眾一個交代

・・・

我們知道婚禮不是兩個人的事
交織兩家人的親戚與朋友
歡迎每個時期重要的你們
認識我也認識我的他

雖然是平凡不過的日常
就是那樣的時間那樣的風景
點滴累積成現在的你這樣的我

不僅是婚宴也是小展覽
從個人回憶連結至共同回憶
邀請你走進我們構築的空間`}}
        />
      </Dark>
    );
  }
}

export default Speech;

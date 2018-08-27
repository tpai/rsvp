import React, { PureComponent } from 'react';

import Dark from 'components/templates/Dark';
import groom from 'images/groom.png';
import bride from 'images/bride.png';
import logo from 'images/logo-blue.svg';
import styles from './styles.scss';

class Thanks extends PureComponent {
  render() {
    return (
      <Dark buttonGroup={(<div className={styles['next']}>&nbsp;</div>)}>
        <div className={styles['default']}>
          <div className={styles['logo']} dangerouslySetInnerHTML={{__html: logo}} />
          <div className={styles['content']}>
            <p>感謝你的填寫</p>
            <p>若有任何問題與狀況</p>
            <p>歡迎隨時與我們聯繫</p>
            <div className={styles['signs']}>
              <img src={groom} className={styles['sign']} />
              <img src={bride} className={styles['sign']} />
            </div>
          </div>
        </div>
      </Dark>
    );
  }
}

export default Thanks;

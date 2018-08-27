import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Dark from 'components/templates/Dark';
import us from 'images/us.jpg';
import gettingMarried from 'images/getting-married.svg';
import styles from './styles.scss';

class GettingMarried extends PureComponent {
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
        <div className={styles['default']}>
          <img src={us} className={styles['us']} />
          <div className={styles['getting-married']} dangerouslySetInnerHTML={{__html: gettingMarried}} />
          <div className={styles['text-block']}>
            <p className={styles['text']}>
              #虎與龍的放閃日記
            </p>
            <p className={styles['text']}>
              迎來最終章？
            </p>
          </div>
        </div>
      </Dark>
    );
  }
}

export default GettingMarried;

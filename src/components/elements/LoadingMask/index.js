import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import loading from 'images/loading.svg';
import bgLeaf from 'images/bg-leaf.png';
import brideAvatar from 'images/bride-avatar.png';
import bride from 'images/bride.png';
import frame from 'images/frame.png';
import groomAvatar from 'images/groom-avatar.png';
import groom from 'images/groom.png';
import us from 'images/us.jpg';
import logoGold from 'images/logo-gold.png';
import styles from './styles.scss';

class LoadingMask extends PureComponent {
  static propTypes = {
    time: PropTypes.number,
  }
  static defaultProps = {
    time: 3000,
  }
  constructor (props) {
    super(props);
    this.state = {
      loaded: false,
      hide: false,
    };
  }
  componentDidMount () {
    const { time } = this.props;
    setTimeout(() => {
      this.setState({ loaded: true });
      this.fadeOut();
    }, time);
  }
  fadeOut = () => {
    setTimeout(() => {
      this.setState({ hide: true });
    }, 300);
  }
  render () {
    const { loaded, hide } = this.state;
    if (hide) return null;
    return (
      <div className={cx(styles['default'], { [styles['hide']]: loaded })}>
        <div className={styles['loading']} dangerouslySetInnerHTML={{__html: loading}} />
        <p className={styles['text']}>Loading...</p>
        <img src={bgLeaf} className={styles['preload']} />
        <img src={brideAvatar} className={styles['preload']} />
        <img src={bride} className={styles['preload']} />
        <img src={frame} className={styles['preload']} />
        <img src={groomAvatar} className={styles['preload']} />
        <img src={groom} className={styles['preload']} />
        <img src={us} className={styles['preload']} />
        <img src={logoGold} className={styles['preload']} />
      </div>
    );
  }
}

export default LoadingMask;

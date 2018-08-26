import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Dark from 'components/templates/Dark';
import logo from 'images/logo-gold.png';
import styles from './styles.scss';

class Home extends PureComponent {
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
        <img src={logo} className={styles['logo']} />
        <p className={styles['text']}>虎與龍的展覽</p>
      </Dark>
    );
  }
}

export default Home;

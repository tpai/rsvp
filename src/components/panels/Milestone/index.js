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
        <div className={styles['default']}>
          <div className={styles['avatar']} dangerouslySetInnerHTML={{__html: logo}} />
          <pre
            className={styles['description']}
            dangerouslySetInnerHTML={{__html:
`100110011001100  工程師的語言
Handwritten Font  設計師的浪漫

2015 . 10 . 01  我們在前公司相識
2018 . 10 . 01  決定攜手共度一生

龍與虎的展覽
1001 Milestone`}}
          />
        </div>
      </Intro>
    );
  }
}

export default Groom;

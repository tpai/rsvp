import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Intro from 'components/templates/Intro';
import bride from 'images/bride-avatar.png';
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
        <div className={styles['default']}>
          <img src={bride} className={styles['avatar']} />
          <pre
            className={styles['description']}
            dangerouslySetInnerHTML={{__html:
`虎虎設計師
台中太平人
愛哭愛笑愛講話
一點點偏執加一些固執
在工作與旅行中探索自我
視文具與手作為精神糧食
永遠都在減肥的路上 (淚)`}}
          />
        </div>
      </Intro>
    );
  }
}

export default Bride;

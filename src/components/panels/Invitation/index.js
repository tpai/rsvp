import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import groom from 'images/groom.png';
import bride from 'images/bride.png';
import Button from 'components/elements/Button';
import Plain from 'components/templates/Plain';
import styles from './styles.scss';

class Invitation extends PureComponent {
  static propTypes = {
    nextPage: PropTypes.func,
  }
  static defaultProps = {
    nextPage: () => {},
  }
  handleClickNext = () => {
    this.props.nextPage();
  }
  handleClickNavigate = () => {
    window.open('https://goo.gl/maps/pgJuEQ3ALCk');
  }
  render () {
    return (
      <Plain onClick={this.handleClickNext}>
        <div className={styles['invitation']}>
          <div className={styles['frame']}>
            <div className={styles['top']}>
              <div className={styles['name']}>
                <img src={groom} className={styles['sign']} />
                白翰霖
              </div>
              <div className={styles['name']}>
                <img src={bride} className={styles['sign']} />
                賴芸慧
              </div>
            </div>
            <div className={styles['middle']}>
              <p className={styles['title']}>
                Save The Date
              </p>
              <hr className={styles['divider']} />
              <p className={styles['date']}>
                2018.11.03  11:00
              </p>
              <hr className={styles['divider']} />
            </div>
            <div className={styles['bottom']}>
              <p className={styles['restaruant']}>
                印月創意東方宴
              </p>
              <p className={styles['address']}>
                台中市市政北一路168號
              </p>
              <Button
                styleTypes={['primary-reverse']}
                className={styles['button']}
                handleClick={this.handleClickNavigate}
              >
                導航前往
              </Button>
            </div>
          </div>
        </div>
      </Plain>
    );
  }
}

export default Invitation;

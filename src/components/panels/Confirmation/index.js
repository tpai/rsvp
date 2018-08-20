import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import Button from 'components/elements/Button';
import Dark from 'components/templates/Dark';
import logo from 'images/logo-gold.svg';
import styles from './styles.scss';

class Confirmation extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.shape({
      name: PropTypes.string,
      nickname: PropTypes.string,
      requirements: PropTypes.arrayOf(PropTypes.string),
      relation: PropTypes.string,
      invitation: PropTypes.string,
      address: PropTypes.string,
    }),
    rsvpCompany: PropTypes.shape({
      companies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        requirements: PropTypes.arrayOf(PropTypes.string),
      })),
    }),
    clickSend: PropTypes.func,
    clickModify: PropTypes.func,
  }
  static defaultProps = {
    rsvp: {
      name: '',
      nickname: '',
      requirements: [],
      relation: '',
      invitation: '',
      address: '',
    },
    rsvpCompany: {
      companies: []
    },
    clickSend: () => {},
    clickModify: () => {},
  }
  constructor(props) {
    super(props);
    this.state = { isVerified: false };
  }
  handleVerify = (response) => {
    this.setState({
      response,
      isVerified: true,
    });
  }
  renderRequirements = (requirements) => {
    return requirements.map(requirement => `(${requirement === 'vegetarian' ? '素食' : requirement === 'kid' ? '兒童' : ''}) `);
  }
  renderValues = (label) => {
    const { rsvp, rsvpCompany } =this.props;
    switch(label) {
    case 'name':
      return `${rsvp[label]}${rsvp['requirements'] ? this.renderRequirements(rsvp['requirements']) : ''}`;
    case 'companies':
      return rsvpCompany.companies.map(company => {
        if (company) {
          const { name, requirements } = company;
          return `${name}${requirements? this.renderRequirements(requirements) : ' '}`;
        }
        return '';
      });
    case 'relation':
      if (rsvp[label] === 'groom')return '男方';
      else if (rsvp[label] === 'bride')return '女方';
      else if (rsvp[label] === 'both')return '共同';
      break;
    case 'invitation':
      if (rsvp[label] === 'yes')return '是，我可以出席';
      else if (rsvp[label] === 'no')return '否，請寄喜帖給我';
      break;
    case 'nickname':
    case 'address':
      return rsvp[label];
    }
  }
  render() {
    const { isVerified, response } = this.state;
    const { clickSend, clickModify } = this.props;
    const labels = {
      name: '姓名',
      nickname: '暱稱',
      relation: '親友',
      invitation: '出席',
      address: '地址',
      companies: '攜伴',
    };
    return (
      <Dark
        buttonGroup={(
          <div className={styles['button-group']}>
            <Button
              key="modify"
              styleTypes={["secondary-reverse"]}
              handleClick={clickModify}
            >
              修改
            </Button>
            <Button
              key="submit"
              styleTypes={["icon-right", "secondary-reverse"]}
              iconType="arrow-right"
              className={styles['submit']}
              handleClick={() => clickSend(response)}
              disabled={!isVerified}
            >
              送出
            </Button>
          </div>
        )}
      >
        <div className={styles['default']}>
          <div className={styles['logo']} dangerouslySetInnerHTML={{__html: logo}} />
          <div className={styles['content']}>
            {Object.keys(labels).map(label => {
              return (
                <p key={`value-${label}`} className={styles['text']}>
                  <p className={styles['label']}>
                    {labels[label]}
                  </p>
                  <p className={styles['value']}>
                    {this.renderValues(label)}
                  </p>
                </p>
              );
            })}
          </div>
          <ul className={styles['border']}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ReCAPTCHA
            sitekey={process.env.RECAPTCHA_SITEKEY}
            onChange={this.handleVerify}
          />
        </div>
      </Dark>
    );
  }
}

export default Confirmation;

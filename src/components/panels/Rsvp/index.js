import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

import Button from 'components/elements/Button';
import Input from 'components/elements/Input';
import Radio from 'components/elements/Radio';
import FormTemplate from 'components/templates/Form';
import validate from './validate';
import styles from './styles.scss';

class Rsvp extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.shape({
      name: PropTypes.string,
      nickname: PropTypes.string,
      requirements: PropTypes.arrayOf(PropTypes.string),
      relation: PropTypes.string,
      invitation: PropTypes.string,
      address: PropTypes.string,
    }),
    onSubmit: PropTypes.func,
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
    onSubmit: () => {},
  }
  render() {
    const { rsvp, onSubmit } = this.props;
    return (
      <FormTemplate>
        <Form
          onSubmit={values => onSubmit(values)}
          initialValues={rsvp}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <p className={styles['list-item']}>
                  1. 請問您的名字是？ (用於喜帖、座位表)
                </p>
                <div className={styles['field']}>
                  <Input
                    name="name"
                    type="text"
                    options={{
                      name: 'requirements',
                      values: [{
                        label: '素食',
                        value: 'vegetarian',
                      }],
                    }}
                    placeholder="中文全名*"
                  />
                </div>
                <div className={styles['field']}>
                  <Input
                    name="nickname"
                    type="text"
                    placeholder="暱稱"
                  />
                </div>
                <p className={styles['list-item']}>
                  2. 請問您是哪方的親戚或朋友呢？*
                </p>
                <div className={styles['field']}>
                  <Radio
                    name="relation"
                    type="radio"
                    values={[{
                      label: '男方',
                      value: 'groom',
                    }, {
                      label: '女方',
                      value: 'bride',
                    }, {
                      label: '共同',
                      value: 'both',
                    }]}
                  />
                </div>
                <p className={styles['list-item']}>
                  3. 是否出席 11 月 3 日設於台中印月的喜宴呢？*
                </p>
                <div className={styles['field']}>
                  <Radio
                    name="invitation"
                    type="radio"
                    values={[{
                      label: '是，我可以出席',
                      value: 'yes',
                    }, {
                      label: '否，請寄喜帖給我',
                      value: 'no',
                    }]}
                    displayStyle="column"
                  />
                </div>
                <p className={styles['list-item']}>
                  4. 請填寫收件地址*
                  <a
                    href="https://www.post.gov.tw/post/internet/SearchZone/index.jsp?ID=130107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['zipcode']}
                  >
                    郵遞區號查詢連結
                  </a>
                </p>
                <div className={styles['field']}>
                  <Input
                    name="address"
                    type="text"
                    placeholder="別忘了填寫郵遞區號"
                  />
                </div>
                <div className={styles['next']}>
                  <Button
                    type="submit"
                    styleTypes={["icon-right", "primary"]}
                    iconType="arrow-right"
                  >
                    繼續
                  </Button>
                </div>
              </div>
            </form>
          )}
        />
      </FormTemplate>
    );
  }
}

export default Rsvp;

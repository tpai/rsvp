import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

import Button from 'components/elements/Button';
import Input from 'components/elements/Input';
import FormTemplate from 'components/templates/Form';
import styles from './styles.scss';

class RsvpCompany extends PureComponent {
  static propTypes = {
    rsvpCompany: PropTypes.shape({
      companies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        requirements: PropTypes.arrayOf(PropTypes.string),
      })),
    }),
    onSubmit: PropTypes.func,
  }
  static defaultProps = {
    rsvpCompany: {
      companies: []
    },
    onSubmit: () => {},
  }
  componentDidMount() {
    /**
     * FieldArray could not define initial field, so
     * directly call onClick to create one.
     */
    if (this.props.rsvpCompany.companies.length === 0) {
      this.addCompanyButton.props.onClick()
    }
  }
  render() {
    const { rsvpCompany, onSubmit } = this.props;
    return (
      <FormTemplate>
        <Form
          onSubmit={(values) => onSubmit(values)}
          initialValues={rsvpCompany}
          mutators={{
            ...arrayMutators
          }}
          render={({
            handleSubmit,
            form: { mutators: { push } },
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <p className={styles['list-item']}>
                  5. 請填寫攜伴資訊 (用於座位表)
                </p>
                <FieldArray name="companies">
                  {({ fields }) =>
                    fields.map(name => (
                      <div key={name} className={styles['field']}>
                        <Input
                          name={`${name}.name`}
                          type="text"
                          options={{
                            name: `${name}.requirements`,
                            values: [{
                              label: '素食',
                              value: 'vegetarian',
                            }, {
                              label: '兒童椅',
                              value: 'kid',
                            }],
                          }}
                          placeholder="中文全名"
                        />
                      </div>
                    ))
                  }
                </FieldArray>
                <div className={styles['field']}>
                  <Button
                    ref={ref => this.addCompanyButton = ref}
                    type="button"
                    styleTypes={["icon-left", "primary-reverse"]}
                    iconType="add"
                    onClick={() => push('companies', undefined)}
                  >
                    新增一欄
                  </Button>
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

export default RsvpCompany;

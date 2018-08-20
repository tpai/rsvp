```js
const { Form } = require('react-final-form');
<Form
  onSubmit={values => console.log(values)}
  render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
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

      <Radio
        name="pick"
        type="checkbox"
        values={[{
          label: 'AAA',
          value: 'aaa',
        }, {
          label: 'BBB',
          value: 'bbb',
        }, {
          label: 'CCC',
          value: 'ccc',
        }]}
      />
    </form>
  )}
/>
```

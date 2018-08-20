const validate = ({
  name,
  relation,
  invitation,
  address,
}) => {
  const errors = {};
  if (!name) {
    errors.name = 'required';
  }
  if (!relation) {
    errors.relation = 'required';
  }
  if (!invitation) {
    errors.invitation = 'required';
  }
  if (!address) {
    errors.address = 'required';
  }
  return errors;
};

export default validate;

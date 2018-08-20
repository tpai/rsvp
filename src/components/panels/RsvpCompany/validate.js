const validate = ({
  companies,
} = {}) => {
  const errors = {
    companies: [],
  };
  if (companies) {
    companies.map((company, index) => {
      if (!company)return;

      const { name, requirements } = company;
      if (!name && requirements.length === 1) {
        errors.companies[index] = Object.assign({}, { name: 'required' });
      }
    });
  }
  return errors;
};

export default validate;

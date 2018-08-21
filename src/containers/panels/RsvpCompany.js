import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RsvpCompany from 'components/panels/RsvpCompany';
import { clickPreview } from 'sagas/rsvpCompany';

function mapStateToProps(state) {
  return {
    rsvpCompany: state.rsvpCompany,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSubmit: values => {
      const companies = values.companies.filter(company => !!company);
      return clickPreview({ companies });
    },
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RsvpCompany);

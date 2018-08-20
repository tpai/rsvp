import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Confirmation from 'components/panels/Confirmation';
import { clickSend } from 'sagas/confirmation';

function mapStateToProps(state) {
  return {
    rsvp: state.rsvp,
    rsvpCompany: state.rsvpCompany,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clickSend,
    clickModify: () => push('/rsvp'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);

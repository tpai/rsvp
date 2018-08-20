import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Invitation from 'components/panels/Invitation';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPage: () => push('/rsvp'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);

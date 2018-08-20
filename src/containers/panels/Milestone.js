import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Milestone from 'components/panels/Milestone';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPage: () => push('/invitation'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Milestone);

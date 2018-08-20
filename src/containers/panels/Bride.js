import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Bride from 'components/panels/Bride';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPage: () => push('/milestone'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bride);

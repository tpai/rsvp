import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import GettingMarried from 'components/panels/GettingMarried';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPage: () => push('/speech'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GettingMarried);

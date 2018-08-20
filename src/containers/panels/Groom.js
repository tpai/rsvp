import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Groom from 'components/panels/Groom';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPage: () => push('/bride'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Groom);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Home from 'components/panels/Home';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPage: () => push('/getting-married'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

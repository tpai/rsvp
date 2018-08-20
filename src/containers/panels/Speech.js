import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Speech from 'components/panels/Speech';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPage: () => push('/groom'),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Speech);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Thanks from 'components/panels/Thanks';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);

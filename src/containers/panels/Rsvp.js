import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Rsvp from 'components/panels/Rsvp';
import { clickNext } from 'sagas/rsvp';

function mapStateToProps(state) {
  return {
    rsvp: state.rsvp,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSubmit: values => clickNext(values),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);

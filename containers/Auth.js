import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../auth.js';
import * as AuthActions from '../actions/auth';

const mapStateToProps = ({ auth: { isLogin } }) => ({
  isLogin,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../components/Header/Navbar";
import * as NavbarActions from "../actions/navbar";

const mapStateToProps = ({ navbar: { navbarActive } }) => ({
  navbarActive,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(NavbarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

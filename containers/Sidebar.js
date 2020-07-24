import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "../components/Sidebar";
import * as SidebarActions from "../actions/sidebar";

const mapStateToProps = ({ sidebar: { sidebarActive } }) => ({
  sidebarActive,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(SidebarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

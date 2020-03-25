import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideBar from '../components/SideBar';
import * as SideBarActions from '../actions/sidebar';

const mapStateToProps = ({ sidebar: { itemActive } }) => ({
  itemActive
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SideBarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

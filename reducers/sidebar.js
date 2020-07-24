import { SIDEBAR_CLICK } from '../actions/sidebar';

export default (state = {}, action) => {
  const { type, sidebarActive } = action;
  switch (type) {
    case SIDEBAR_CLICK:
      return Object.assign({}, state, { sidebarActive });
    default:
      return state;
  }
};

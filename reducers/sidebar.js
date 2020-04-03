import { SIDEBAR_CLICK } from '../actions/sidebar';

export default (state = {}, action) => {
  const { type, itemActive } = action;
  switch (type) {
    case SIDEBAR_CLICK:
      return Object.assign({}, state, { itemActive });
    default:
      return state;
  }
};

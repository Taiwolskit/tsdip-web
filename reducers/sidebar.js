import { SIDEBAR_CLICK } from '../actions/sidebar';

const initialState = {
  itemActive: '/profile'
};

export default (state = initialState, action) => {
  const { type, itemActive } = action;
  switch (type) {
    case SIDEBAR_CLICK:
      return Object.assign({}, state, { itemActive });
    default:
      return state;
  }
};

import { NAVBAR_CLICK } from '../actions/navbar';

export default (state = {}, action) => {
  const { type, navbarActive } = action;
  switch (type) {
    case NAVBAR_CLICK:
      return Object.assign({}, state, { navbarActive });
    default:
      return state;
  }
};

import { CHECK_AUTH } from '../actions/auth';

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  const { type, isLogin } = action;

  switch (type) {
    case CHECK_AUTH:
      return Object.assign({}, state, { isLogin: !isLogin });
    default:
      return state;
  }
};

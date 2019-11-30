export default (state, { type, isLoggedIn }) => {
  switch (type) {
    case 'GOOGLE_LOGIN':
      return !isLoggedIn;
    default:
      return state;
  }
};

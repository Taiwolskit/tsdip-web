export default function loginReducer(state, { type, token }) {
  switch (type) {
    case 'LOGIN':
      return Object.assign({}, state, { token });
    default:
      return state;
  }
}

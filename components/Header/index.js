import { useReducer } from 'react';
import { DispatchContext } from '../../context';
import LoginReducer from '../../reducers/login';
import Navbar from './Navbar';

const Header = () => {
  const [isLoggedIn, dispatchLogin] = useReducer(LoginReducer, false);
  const dispatch = action => [dispatchLogin].forEach(fn => fn(action));

  return (
    <DispatchContext.Provider value={dispatch}>
      <header id='header'>
        <Navbar isLoggedIn={isLoggedIn} />
      </header>
    </DispatchContext.Provider>
  );
};

export default Header;

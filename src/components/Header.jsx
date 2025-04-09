import React from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeader } from '../hook/useHeader';
import '../assets/main.css'; // Make sure this contains global styles

const Header = () => {
  const { changeTheme, state } = useHeader();

  return (
    <div className="header-toggle-container">
      <button className="theme-toggle-button" onClick={changeTheme}>
        <FontAwesomeIcon
          icon={state.dark ? faMoon : faSun}
          style={{ color: state.dark ? '#fff' : '#ffa500' }}
        />
      </button>
    </div>
  );
};

export default Header;
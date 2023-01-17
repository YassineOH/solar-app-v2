import { useState, useEffect } from 'react';
import { getCurrentTheme, switchTheme } from '@utils/theme';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/eone.png';

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(getCurrentTheme());
  useEffect(() => {
    if (isDarkMode) {
      switchTheme(true);
    }
  }, []);

  const handleClick = () => {
    setDarkMode(!isDarkMode);
    switchTheme(!isDarkMode);
  };
  return (
    <nav className="border-bottom w-screen border-teal-800 shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-10 lg:px-0">
        <img src={logo} alt="Eone" className="aspect-auto h-10 lg:h-16" />
        <div>
          <button
            type="button"
            onClick={handleClick}
            className="aspect-square w-16 rounded-lg p-3 text-center text-3xl outline-none ring-2 ring-teal-600"
          >
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

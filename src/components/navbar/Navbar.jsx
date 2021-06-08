import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavMenu } from './Navbar.styles';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };
  return (
    <div>
      <nav className='nav'>
        <div className='navbar-container'>
          <Link className='nav-logo' to='/'>
            LOGOS
          </Link>

          <NavMenu onClick={handleClick} click={menu}>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/page1'>
                Page1
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/page2'>
                Page2
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/page3'>
                Page3
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/page4'>
                Page4
              </Link>
            </li>
          </NavMenu>
          <div className='mobile-icon' onClick={handleClick} click={+menu}>
            {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

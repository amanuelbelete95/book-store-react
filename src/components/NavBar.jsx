import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const navStyle = {
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '1.5em 5em',
    gap: '1.5em',
  };
  const h1Style = {
    color: '#379cf6',
    fontSize: '1.8em',
  };
  const ulStyle = {
    display: 'flex',
    gap: '1em',
  };
  const liStyle = {
    textDecoration: 'none',
    listStyleType: 'none',
  };
  const navLinkStyle = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '.9em',
  };
  const links = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'categories',
      path: 'categories',
    },
  ];
  return (
    <nav style={navStyle}>
      <h1 style={h1Style}>
        Aman Bookstore
      </h1>
      <ul style={ulStyle}>
        {links.map((link) => (
          <li
            key={link.name}
            style={liStyle}
          >
            <NavLink to={link.path} style={navLinkStyle}>
              {link.name}

            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
